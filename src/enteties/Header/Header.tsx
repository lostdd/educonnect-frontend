import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Образовательная Платформа</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/courses">Курсы</Link>
        <Link href="/portfolio">Портфолио</Link>
        <Link href="/jobs">Работа</Link>
        <Link href="/contact">Контакты</Link>
      </nav>
      <div className={styles.authButtons}>
        <Link href="/login">
          <button className={styles.loginButton}>Войти</button>
        </Link>
        <Link href="/register">
          <button className={styles.registerButton}>Регистрация</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
