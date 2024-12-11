import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  isInstructor?: boolean; // Признак роли преподавателя
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick, isInstructor }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">Образовательная Платформа</a>
      </div>
      <nav className={styles.nav}>
        <a href="/courses">Курсы</a>
        {!isInstructor && <a href="/portfolio">Портфолио</a>}
        {!isInstructor && <a href="/jobs">Работа</a>}
        <a href="/contact">Контакты</a>
        {isInstructor && (
          <a href="/create-course">Создать курс</a> // Ссылка только для преподавателей
        )}
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.loginButton} onClick={onLoginClick}>
          Войти
        </button>
        <button className={styles.registerButton} onClick={onRegisterClick}>
          Регистрация
        </button>
      </div>
    </header>
  );
};

export default Header;
