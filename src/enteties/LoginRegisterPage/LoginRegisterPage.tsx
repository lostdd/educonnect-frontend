'use client';

import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Register from '../Register/Register'; 
import Login from '../Login/Login';

const LoginRegisterPage: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalVisible(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  const handleOpenRegisterModal = () => {
    setIsRegisterModalVisible(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalVisible(false);
  };

  return (
    <div>
      <button onClick={handleOpenLoginModal}>Войти</button>
      <button onClick={handleOpenRegisterModal}>Регистрация</button>

      {/* Модальное окно для Входа */}
      <Modal isVisible={isLoginModalVisible} onClose={handleCloseLoginModal}>
        <Login onSubmit={(data) => console.log('Login data:', data)} />
      </Modal>

      {/* Модальное окно для Регистрации */}
      <Modal isVisible={isRegisterModalVisible} onClose={handleCloseRegisterModal}>
        <Register onSubmit={(data) => console.log('Registration data:', data)} />
      </Modal>
    </div>
  );
};

export default LoginRegisterPage;
