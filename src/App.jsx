import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <>
    <nav className='flex justify-around bg-neutral-700 text-white py-2 w-screen'>
    <div className='logo'>
      <span className='font-bold text-xl mx-9'> My Tasks</span>
    </div>
    <ul className='flex gap-8 mx-9' >
      <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
      <li className='cursor-pointer hover:font-bold transition-all duration-50'>Your Tasks</li>
    </ul>
  </nav>
    <div className="min-h-screen bg-emerald-700 flex items-center justify-center p-6 h-svh">
      <div className="bg-purple-200 border-2 shadow-xl/30 rounded-lg p-6 max-w-xl mx-3 md:container md:mx-auto my-5 min-h-[50vh] w-screen">
        <Header />
        <div className="flex mt-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition ml-2 rounded-md"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ToDoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
          onEdit={editTodo}
        />
      </div>
    </div>
    </>
  );
}

export default App;
