'use client';

import React, { useState } from "react";
import Link from "next/link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { motion } from 'framer-motion';
import styles from "./Main.module.css";

interface MainPageProps {
  isLoggedIn: boolean;
  isTeacher: boolean;
}

const MainPage: React.FC<MainPageProps> = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isTeacher = false;

  const handleOpenLoginModal = () => setIsLoginModalVisible(true);
  const handleCloseLoginModal = () => setIsLoginModalVisible(false);

  const handleOpenRegisterModal = () => setIsRegisterModalVisible(true);
  const handleCloseRegisterModal = () => setIsRegisterModalVisible(false);

  return (
    <div className={styles.mainContainer}>
      <Header
        onLoginClick={handleOpenLoginModal}
        onRegisterClick={handleOpenRegisterModal}
        isTeacher={isTeacher}
        isLoggedIn={isLoggedIn}
      />
      <main className={styles.mainContent}>
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.title}>Добро пожаловать на образовательную платформу!</h1>
          <p className={styles.description}>
            Инновационный подход к обучению, проектам и развитию вашей карьеры.
          </p>
          <div className={styles.buttons}>
            {isLoggedIn ? (
              isTeacher ? (
                <Link href="/courses?create=true">
                  <button className={styles.primaryButton}>Создать курс</button>
                </Link>
              ) : (
                <>
                  <Link href="/courses">
                    <button className={styles.primaryButton}>Начать обучение</button>
                  </Link>
                  <Link href="/find-more">
                    <button className={styles.secondaryButton}>Узнать больше</button>
                  </Link>
                </>
              )
            ) : (
              <>
                <Link href="/courses">
                  <button className={styles.primaryButton}>Начать обучение</button>
                </Link>
                <Link href="/findeMore">
                  <button className={styles.secondaryButton}>Узнать больше</button>
                </Link>
              </>
            )}
          </div>
        </motion.section>

        {!isTeacher && !isLoggedIn && (
          <motion.section
            className={styles.features}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link href="/individualLearning">
                <h3>Индивидуальное обучение</h3>
              </Link>
              <p>Получайте персонализированные рекомендации и материалы.</p>
            </motion.div>
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link href="/collaboration">
                <h3>Совместная работа над проектом</h3>
              </Link>
              <p>Удобно управление задчами для проекта</p>
            </motion.div>
            <motion.div
              className={styles.featureCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link href="/instantFeedback">
                <h3>Мгновенная обратная связь</h3>
              </Link>
              <p>Получайте отзывы от преподавателей и коллег.</p>
            </motion.div>
          </motion.section>
        )}
      </main>
      <Footer />
      <Modal isVisible={isLoginModalVisible} onClose={handleCloseLoginModal}>
        <Login onSubmit={(data) => { setIsLoggedIn(true); console.log("Login data:", data); }} />
      </Modal>
      <Modal isVisible={isRegisterModalVisible} onClose={handleCloseRegisterModal}>
        <Register onSubmit={(data) => { setIsLoggedIn(true); console.log("Registration data:", data); }} />
      </Modal>
    </div>
  );
};

export default MainPage;
