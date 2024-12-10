import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href="/about">О платформе</Link>
        <Link href="/privacy">Политика конфиденциальности</Link>
        <Link href="/terms">Условия использования</Link>
        <Link href="/contact">Контакты</Link>
      </div>
      <p className={styles.copy}>© 2024 Образовательная Платформа. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
