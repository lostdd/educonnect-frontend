import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>О платформе</h2>
        <p className={styles.description}>
          Наша образовательная платформа создана для тех, кто хочет развиваться, учиться новому и строить успешную карьеру. Мы предлагаем разнообразные курсы по самым актуальным направлениям, используя современные методики обучения и лучших преподавателей.
        </p>
        <p className={styles.description}>
          Мы считаем, что образование должно быть доступным, интересным и практичным. Наша цель — предоставить вам возможность обучаться в любое время и в любом месте, предлагая материалы, которые соответствуют мировым стандартам.
        </p>
        <p className={styles.description}>
          Присоединяйтесь к нашей платформе, чтобы стать частью динамичного образовательного сообщества и начать свой путь к новым достижениям!
        </p>
      </div>
    </section>
  );
};

export default About;
