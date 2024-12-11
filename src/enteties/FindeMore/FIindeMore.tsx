'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FindeMore.module.css';

const LearnMorePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Узнать больше
      </motion.h1>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className={styles.section}>
          <h2 className={styles.subtitle}>Цель сайта</h2>
          <p className={styles.text}>
            Цель проекта —
            создание удобного и функционального интерфейса для пользователей, с использованием современных технологий.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Используемые технологии</h2>
          <p className={styles.text}>
            Этот проект был создан с использованием следующих технологий:
            <ul className={styles.list}>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>CSS Modules</li>
              <li>Framer Motion для анимаций</li>
            </ul>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Ссылка на GitHub</h2>
          <p className={styles.text}>
            Исходный код проекта доступен на GitHub. Вы можете ознакомиться с ним, внести свои предложения или улучшения.
            <a
              href="https://github.com/lostdd/educonnect-backend.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Перейти на GitHub
            </a>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Пожелания пользователям</h2>
          <p className={styles.text}>
            Благодарим вас за использование нашего сайта! Мы всегда открыты для предложений по улучшению функционала и
            интерфейса. Ваши отзывы помогут нам сделать сайт еще лучше.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LearnMorePage;
