'use client';

import { Todo } from '@/types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
}

export default function TodoList({ todos, toggleTodo, deleteTodo, editTodo }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 text-center py-6">
        <p className="mb-2">No tasks yet. Add one using the form above!</p>
        <p className="text-sm">This todo app helps you keep track of your tasks in English. Click the "Add" button to create your first task.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
} 