import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load from localStorage or API
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      setTodos(JSON.parse(saved));
      setLoading(false);
    } else {
      fetch('https://6808353a942707d722dd90c2.mockapi.io/todos')
        .then(res => {
          if (!res.ok) {
            throw new Error('Lỗi khi tải dữ liệu');
          }
          return res.json();
        })
        .then(data => {
          setTodos(data);
          localStorage.setItem('todos', JSON.stringify(data)); // Lưu lần đầu từ API
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, []);

  // Lưu vào localStorage khi todos thay đổi
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, loading]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = { id: Date.now(), text: newTodo, done: false };
      setTodos(prev => [...prev, newTodoItem]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'completed' ? todo.done :
    filter === 'active' ? !todo.done :
    true
  );

  const doneCount = todos.filter(todo => todo.done).length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-xl p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border p-2 rounded bg-gray-700 text-white"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Nhập công việc..."
          />
          <button className="bg-blue-500 text-white px-4 rounded" onClick={addTodo}>
            Thêm
          </button>
        </div>

        <div className="flex gap-2 mb-4 justify-center">
          <button onClick={() => setFilter('all')} className="border px-2 rounded text-white border-white">Tất cả</button>
          <button onClick={() => setFilter('completed')} className="border px-2 rounded text-white border-white">Hoàn thành</button>
          <button onClick={() => setFilter('active')} className="border px-2 rounded text-white border-white">Chưa hoàn thành</button>
        </div>

        {loading && <p className="text-white text-center">Đang tải dữ liệu...</p>}
        {error && <p className="text-red-500 text-center">{`Lỗi: ${error}`}</p>}

        {!loading && !error && filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}

        <div className="mt-4 text-white text-center">
          Tổng: {todos.length} | Hoàn thành: {doneCount}
        </div>
      </div>
    </div>
  );
}
