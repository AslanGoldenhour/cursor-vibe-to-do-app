import TodoApp from '@/components/TodoApp';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900" lang="en">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-4 w-full">
        <div className="w-full max-w-4xl px-4">
          <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">Cursor Vibe Todo App</h1>
          <p className="text-center mb-8 text-gray-600 dark:text-gray-300">Manage your tasks efficiently with this simple English-language todo application.</p>
          <TodoApp />
        </div>
      </main>
    </div>
  );
} 