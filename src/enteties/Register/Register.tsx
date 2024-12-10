'use client';  // Указываем, что этот компонент должен работать на клиенте

import React, { useState } from 'react';
import styles from './Register.module.css';

interface RegistrationProps {
  onSubmit: (data: { email: string; password: string; confirmPassword: string }) => void;
}

const Register: React.FC<RegistrationProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === confirmPassword) {
      onSubmit({ email, password, confirmPassword });
    } else {
      alert('Пароли не совпадают!');
    }
  };

  return (
    <div className={styles.registrationForm}>
      <h2 className={styles.registrationTitle}>Регистрация</h2>
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
        <input
          type="password"
          placeholder="Подтверждение пароля"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.inputField}
          required
        />
        <div className={styles.registrationButtons}>
          <button type="submit" className={styles.registrationButton}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
