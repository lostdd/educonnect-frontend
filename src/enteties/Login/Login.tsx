'use client';

import React, { useState } from 'react';
import styles from './Login.module.css';

interface LoginProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.loginTitle}>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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