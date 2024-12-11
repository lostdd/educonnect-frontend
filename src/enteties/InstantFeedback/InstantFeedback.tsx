'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './InstantFeedback.module.css';

const InstantFeedbackPage: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [responses, setResponses] = useState<{ message: string; reply: string }[]>([]);

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(e.target.value);
  };

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim() === '') return;

    // Пример симуляции ответа
    const simulatedReply = `Спасибо за ваш отзыв: "${feedback}". Мы ценим вашу обратную связь!`;

    setResponses([{ message: feedback, reply: simulatedReply }, ...responses]);
    setFeedback('');
  };

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Мгновенная обратная связь
      </motion.h1>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Делитесь своими мыслями и получайте мгновенные ответы.
      </motion.p>

      <motion.div
        className={styles.feedbackForm}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <form onSubmit={handleSendFeedback}>
          <input
            type="text"
            value={feedback}
            onChange={handleFeedbackChange}
            className={styles.inputField}
            placeholder="Введите ваше сообщение..."
          />
          <button type="submit" className={styles.sendButton}>
            Отправить
          </button>
        </form>
      </motion.div>

      <motion.div
        className={styles.responseList}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        {responses.map((response, index) => (
          <div key={index} className={styles.responseItem}>
            <div className={styles.messageBox}>
              <strong>Ваше сообщение:</strong>
              <p>{response.message}</p>
            </div>
            <div className={styles.replyBox}>
              <strong>Ответ:</strong>
              <p>{response.reply}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InstantFeedbackPage;
