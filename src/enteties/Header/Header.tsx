import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">Образовательная Платформа</a>
      </div>
      <nav className={styles.nav}>
        <a href="/courses">Курсы</a>
        <a href="/portfolio">Портфолио</a>
        <a href="/jobs">Работа</a>
        <a href="/contact">Контакты</a>
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
