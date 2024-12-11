'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const ContactsPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет обработка отправки формы (например, отправка на сервер)
    setResponse('Спасибо за ваше сообщение! Мы свяжемся с вами скоро.');
  };

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Контакты
      </motion.h1>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className={styles.contactInfo}>
          <h2 className={styles.subtitle}>Контактная информация</h2>
          <p className={styles.text}>Телефон: +123 456 7890</p>
          <p className={styles.text}>Email: contact@example.com</p>
          <p className={styles.text}>Адрес: ул. Примерная, 123, Москва, Россия</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Форма обратной связи</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              className={styles.inputField}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ваш email"
              className={styles.inputField}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ваше сообщение"
              className={styles.textareaField}
            />
            <button type="submit" className={styles.submitButton}>Отправить</button>
          </form>
          {response && <p className={styles.responseMessage}>{response}</p>}
        </div>

        <div className={styles.socialLinks}>
          <h2 className={styles.subtitle}>Мы в социальных сетях</h2>
          <p className={styles.text}>
            Присоединяйтесь к нам в соцсетях:
            <ul className={styles.socialList}>
              <li><a href="https://twitter.com" target="_blank" className={styles.link}>Twitter</a></li>
              <li><a href="https://facebook.com" target="_blank" className={styles.link}>Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" className={styles.link}>Instagram</a></li>
            </ul>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactsPage;
