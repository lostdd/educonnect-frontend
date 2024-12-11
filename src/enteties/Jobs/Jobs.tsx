import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Jobs.module.css';

const jobs = [
  { id: 1, title: 'Вакансия 1', description: 'Описание вакансии 1' },
  { id: 2, title: 'Вакансия 2', description: 'Описание вакансии 2' },
  { id: 3, title: 'Вакансия 3', description: 'Описание вакансии 3' },
  { id: 4, title: 'Вакансия 4', description: 'Описание вакансии 4' },
  { id: 5, title: 'Вакансия 5', description: 'Описание вакансии 5' },
  { id: 6, title: 'Вакансия 6', description: 'Описание вакансии 6' },
  { id: 7, title: 'Вакансия 7', description: 'Описание вакансии 7' },
  { id: 8, title: 'Вакансия 8', description: 'Описание вакансии 8' },
];

const JobsPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.jobsContainer}>
          {jobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <button className={styles.secondaryButton}>Подробнее</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobsPage;
