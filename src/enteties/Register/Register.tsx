'use client';

import React, { useState } from 'react';
import styles from './Register.module.css';

interface RegistrationProps {
  onSubmit: (data: { login: string; password: string; confirmPassword: string; telegramId: string }) => void;
}

const Register: React.FC<RegistrationProps> = ({ onSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telegramId, setTelegramId] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === confirmPassword) {
      onSubmit({ login, password, confirmPassword, telegramId });
    } else {
      alert('Пароли не совпадают!');
    }
  };

  // Обработчик для кнопки "Проверить регистрацию"
  const handleCheckRegistration = () => {
    const botUrl = `https://t.me/const_hack2024bot?start=${telegramId}`; // Ссылка на бот с параметром telegramId
    window.open(botUrl, '_blank'); // Открываем ссылку в новом окне
  };

  return (
    <div className={styles.registrationForm}>
      <h2 className={styles.registrationTitle}>Регистрация</h2>
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
          type="password"
          placeholder="Подтверждение пароля"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.inputField}
          required
        />
        <input
          type="text"
          placeholder="Telegram ID"
          value={telegramId}
          onChange={(e) => setTelegramId(e.target.value)}
          className={styles.inputField}
        />
        <div className={styles.registrationButtons}>
          <button type="submit" className={styles.registrationButton}>
            Зарегистрироваться
          </button>
          <button
            type="button"
            className={styles.checkRegistrationButton}
            onClick={handleCheckRegistration} // Обработчик кнопки "Проверить регистрацию"
          >
            Проверить регистрацию
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
