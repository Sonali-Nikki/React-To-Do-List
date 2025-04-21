import { useState } from 'react';

const ToDoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 p-3 rounded shadow-sm">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 text-blue-600"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="p-1 border border-gray-300 rounded"
          />
        ) : (
          <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
          >Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600"
          >Edit
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
        > Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
