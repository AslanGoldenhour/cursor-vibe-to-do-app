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
  const mockEditTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the todo text correctly', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo}
        editTodo={mockEditTodo}
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
        editTodo={mockEditTodo}
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
        editTodo={mockEditTodo}
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
        editTodo={mockEditTodo}
      />
    );
    
    const todoText = screen.getByText('Test Todo');
    expect(todoText).toHaveClass('line-through');
  });

  it('switches to edit mode when edit button is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo}
        editTodo={mockEditTodo}
      />
    );
    
    const editButton = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(editButton);
    
    // After clicking edit, we should see an input field with the current todo text
    const editInput = screen.getByDisplayValue('Test Todo');
    expect(editInput).toBeInTheDocument();
  });

  it('updates todo text and calls editTodo when save button is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo}
        editTodo={mockEditTodo}
      />
    );
    
    // Enter edit mode
    const editButton = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(editButton);
    
    // Change the input value
    const editInput = screen.getByDisplayValue('Test Todo');
    fireEvent.change(editInput, { target: { value: 'Updated Todo' } });
    
    // Save the changes
    const saveButton = screen.getByRole('button', { name: 'Save' });
    fireEvent.click(saveButton);
    
    // Check if editTodo was called with the right arguments
    expect(mockEditTodo).toHaveBeenCalledWith('1', 'Updated Todo');
  });

  it('cancels editing when cancel button is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        toggleTodo={mockToggleTodo} 
        deleteTodo={mockDeleteTodo}
        editTodo={mockEditTodo}
      />
    );
    
    // Enter edit mode
    const editButton = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(editButton);
    
    // Change the input value
    const editInput = screen.getByDisplayValue('Test Todo');
    fireEvent.change(editInput, { target: { value: 'This should be discarded' } });
    
    // Cancel the changes
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    
    // We should be back to display mode with the original text
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(mockEditTodo).not.toHaveBeenCalled();
  });
}); 