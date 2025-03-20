'use client';

import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from '@/types';

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load todos from localStorage on client-side
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever they change
    if (!loading) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, loading]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (loading) {
    return <div className="w-full text-center dark:text-white">Loading...</div>;
  }

  return (
    <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
} 