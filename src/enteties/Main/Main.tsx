import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './Main.module.css';  // Стили для Main компонента

const MainPage = () => {
    return (
      <div className={styles.mainContainer}>
        <Header />
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
              <h3>Проектная работа</h3>
              <p>Работайте над реальными проектами с компаниями-партнерами.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Мгновенная обратная связь</h3>
              <p>Получайте отзывы от преподавателей и коллег.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default MainPage;