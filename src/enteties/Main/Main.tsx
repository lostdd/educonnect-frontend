'use client';

import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Register from "../Register/Register";
import Login from "../Login/Login";
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
        <section className={styles.hero}>
          <h1 className={styles.title}>Добро пожаловать на образовательную платформу!</h1>
          <p className={styles.description}>
            Инновационный подход к обучению, проектам и развитию вашей карьеры.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Начать обучение</button>
            <button className={styles.secondaryButton}>Узнать больше</button>
          </div>
        </section>
        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h3>Индивидуальное обучение</h3>
            <p>Получайте персонализированные рекомендации и материалы.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Совместная работа над проектом</h3>
            <p>Работайте над реальными проектами с компаниями-партнерами.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Мгновенная обратная связь</h3>
            <p>Получайте отзывы от преподавателей и коллег.</p>
          </div>
        </section>
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
