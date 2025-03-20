'use client';

import { Todo } from '@/types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm border dark:border-gray-600">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-5 w-5 text-blue-500 mr-3"
        />
        <span 
          className={`${
            todo.completed 
              ? 'line-through text-gray-400 dark:text-gray-500' 
              : 'text-gray-800 dark:text-gray-200'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
        aria-label="Delete"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </li>
  );
} 