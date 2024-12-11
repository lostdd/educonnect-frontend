'use client';

import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { motion } from 'framer-motion';  // Импортируем framer-motion для анимаций
import styles from "./Main.module.css";

const MainPage = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);

  const handleOpenLoginModal = () => setIsLoginModalVisible(true);
  const handleCloseLoginModal = () => setIsLoginModalVisible(false);

  const handleOpenRegisterModal = () => setIsRegisterModalVisible(true);
  const handleCloseRegisterModal = () => setIsRegisterModalVisible(false);

  return (
    <div className={styles.mainContainer}>
      <Header
        onLoginClick={handleOpenLoginModal}
        onRegisterClick={handleOpenRegisterModal}
      />
      <main className={styles.mainContent}>
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: -50 }} // Начальное состояние
          animate={{ opacity: 1, y: 0 }}    // Конечное состояние
          transition={{ duration: 1 }}      // Длительность анимации
        >
          <h1 className={styles.title}>Добро пожаловать на образовательную платформу!</h1>
          <p className={styles.description}>
            Инновационный подход к обучению, проектам и развитию вашей карьеры.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Начать обучение</button>
            <button className={styles.secondaryButton}>Узнать больше</button>
          </div>
        </motion.section>
        <motion.section
          className={styles.features}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }} // Добавляем небольшую задержку для эффекта
        >
          <motion.div
            className={styles.featureCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3>Индивидуальное обучение</h3>
            <p>Получайте персонализированные рекомендации и материалы.</p>
          </motion.div>
          <motion.div
            className={styles.featureCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h3>Совместная работа над проектом</h3>
            <p>Работайте над реальными проектами с компаниями-партнерами.</p>
          </motion.div>
          <motion.div
            className={styles.featureCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h3>Мгновенная обратная связь</h3>
            <p>Получайте отзывы от преподавателей и коллег.</p>
          </motion.div>
        </motion.section>
      </main>
      <Footer />

      {/* Модальные окна */}
      <Modal isVisible={isLoginModalVisible} onClose={handleCloseLoginModal}>
        <Login onSubmit={(data) => console.log("Login data:", data)} />
      </Modal>
      <Modal isVisible={isRegisterModalVisible} onClose={handleCloseRegisterModal}>
        <Register onSubmit={(data) => console.log("Registration data:", data)} />
      </Modal>
    </div>
  );
};

export default MainPage;
