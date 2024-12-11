import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Portfolio.module.css';

const projects = [
  { id: 1, title: 'Проект 1', description: 'Описание проекта 1' },
  { id: 2, title: 'Проект 2', description: 'Описание проекта 2' },
  { id: 3, title: 'Проект 3', description: 'Описание проекта 3' },
  { id: 4, title: 'Проект 4', description: 'Описание проекта 4' },
  { id: 5, title: 'Проект 5', description: 'Описание проекта 5' },
  { id: 6, title: 'Проект 6', description: 'Описание проекта 6' },
  { id: 7, title: 'Проект 7', description: 'Описание проекта 7' },
  { id: 8, title: 'Проект 8', description: 'Описание проекта 8' },
];

const PortfolioPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.portfolioContainer}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button className={styles.secondaryButton}>Подробнее</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
