'use client';

import { useState } from 'react';
import { Todo } from '@/types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm border dark:border-gray-600">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-grow px-2 py-1 mr-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          autoFocus
        />
        <div className="flex space-x-2">
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors"
            aria-label="Save"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={handleCancel}
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
            aria-label="Cancel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </li>
    );
  }

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
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          aria-label="Edit"
          disabled={todo.completed}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${todo.completed ? 'opacity-50 cursor-not-allowed' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
          aria-label="Delete"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </li>
  );
} 