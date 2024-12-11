'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Collaboration.module.css';

const CollaborativeProjectPage: React.FC = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Совместная работа над проектом
      </motion.h1>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Управляйте задачами вашего проекта в режиме реального времени, добавляя и обновляя их.
      </motion.p>

      <motion.div
        className={styles.taskForm}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            value={task}
            onChange={handleTaskChange}
            className={styles.inputField}
            placeholder="Введите задачу..."
          />
          <button type="submit" className={styles.addButton}>
            Добавить
          </button>
        </form>
      </motion.div>

      <motion.ul
        className={styles.taskList}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        {tasks.map((t, index) => (
          <li key={index} className={styles.taskItem}>
            <span>{t}</span>
            <button
              onClick={() => handleRemoveTask(index)}
              className={styles.removeButton}
            >
              Удалить
            </button>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CollaborativeProjectPage;
