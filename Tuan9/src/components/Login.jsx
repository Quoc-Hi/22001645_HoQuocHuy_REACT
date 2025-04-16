import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên đăng nhập"
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </>
      ) : (
        <div>
          <h1>Chào mừng, {user.username}!</h1>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      )}
    </div>
  );
};

export default Login;
