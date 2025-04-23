import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-2 mb-2 bg-gray-700 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className={`text-white ${todo.done ? 'line-through text-gray-400' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Xoá
      </button>
    </div>
  );
}