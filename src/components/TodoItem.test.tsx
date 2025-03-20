import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const mockTodo = {
    id: '1',
    text: 'Test Todo',
    completed: false,
    createdAt: new Date().toISOString()
  };
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the todo text correctly', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo} 
      />
    );
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('calls toggleTodo when checkbox is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo} 
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(mockToggleTodo).toHaveBeenCalledWith('1');
  });

  it('calls deleteTodo when delete button is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo} 
      />
    );
    
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
    
    expect(mockDeleteTodo).toHaveBeenCalledWith('1');
  });

  it('shows the correct styles for completed todos', () => {
    const completedTodo = { ...mockTodo, completed: true };
    
    render(
      <TodoItem 
        todo={completedTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo} 
      />
    );
    
    const todoText = screen.getByText('Test Todo');
    expect(todoText).toHaveClass('line-through');
  });
}); 