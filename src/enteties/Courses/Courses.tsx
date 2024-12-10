'use client';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Courses.module.css';

interface Course {
  id: number;
  title: string;
  description: string;
}

const MainPage: React.FC = () => {
  const [courses] = useState<Course[]>([
    { id: 1, title: 'Курс 1', description: 'Описание курса 1' },
    { id: 2, title: 'Курс 2', description: 'Описание курса 2' },
    { id: 3, title: 'Курс 3', description: 'Описание курса 3' },
    { id: 4, title: 'Курс 4', description: 'Описание курса 4' },
    { id: 5, title: 'Курс 5', description: 'Описание курса 5' },
    { id: 6, title: 'Курс 6', description: 'Описание курса 6' },
    { id: 7, title: 'Курс 7', description: 'Описание курса 7' },
    { id: 8, title: 'Курс 8', description: 'Описание курса 8' },
  ]);

  const handleCourseClick = (id: number) => {
    console.log(`Перейти к курсу с id ${id}`);
    // Логика для перехода на детальную страницу курса или модальное окно
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.coursesContainer}>
          {courses.map((course) => (
            <div
              key={course.id}
              className={styles.courseCard}
              onClick={() => handleCourseClick(course.id)}
            >
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button className={styles.secondaryButton}>Подробнее</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
