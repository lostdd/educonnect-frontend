import React, { useState } from 'react';
import styles from './Registration.module.css';

interface RegistrationProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

const Registration: React.FC<RegistrationProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === confirmPassword) {
      onSubmit({ email, password });
    } else {
      alert('Пароли не совпадают');
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
          placeholder="Подтвердите пароль"
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

export default Registration;
