// pages/individual-learning.tsx

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './IndividualLearning.module.css';

const IndividualLearning: React.FC = () => {
  const [userQuestion, setUserQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuestion(e.target.value);
  };

  const handleSubmitQuestion = async (e: React.FormEvent) => {
    e.preventDefault();

    // Здесь будет обработка запроса, например, отправка на сервер или к GPT
    // В нашем примере просто симуляция ответа
    setResponse('Ответ GPT: Это пример ответа на ваш вопрос.');
  };

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Индивидуальное обучение
      </motion.h1>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className={styles.questionBox}>
          <form onSubmit={handleSubmitQuestion}>
            <input
              type="text"
              value={userQuestion}
              onChange={handleQuestionChange}
              className={styles.inputField}
              placeholder="Введите ваш вопрос..."
            />
            <button type="submit" className={styles.submitButton}>Отправить</button>
          </form>
        </div>

        {response && (
          <div className={styles.responseBox}>
            <h3 className={styles.responseTitle}>Ответ:</h3>
            <p>{response}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default IndividualLearning;
