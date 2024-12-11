'use client';

import React, { useState } from 'react';
import styles from './Login.module.css';

interface LoginProps {
  onSubmit: (data: { login: string; password: string; telegramId: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [telegramId, setTelegramId] = useState(''); // Состояние для Telegram ID

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ login, password, telegramId }); // Передаем Telegram ID при отправке
  };

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.loginTitle}>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className={styles.inputField}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
          required
        />
        <input
          type="text"
          placeholder="Telegram ID"
          value={telegramId}
          onChange={(e) => setTelegramId(e.target.value)} // Обработчик для поля Telegram ID
          className={styles.inputField}
        />
        <div className={styles.loginButtons}>
          <button type="submit" className={styles.loginButton}>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
