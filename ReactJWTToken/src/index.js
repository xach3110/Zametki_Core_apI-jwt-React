import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Zametka from './components/Zametka/Zametka.tsx';
import Addzametka from './components/Addzametka/Addzametka.tsx';
import Deletezametka from './components/Deletezametka/Deletezametka.tsx';
import Login from './components/Login/Login.tsx';
import Register from './components/Register/Register.tsx';
import Modal from './components/Modalwindow/Modalwindow.tsx'; // Импортируем модальное окно

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Register />
      <Login />
      <Zametka 
        note={{
          title: "My First Note",
          date: "2024-09-01",
          time: "10:00",
          content: "This is the content of the note."
        }}
      />
      <button onClick={handleOpenModal} >Добавить заметку</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Addzametka></Addzametka>
      </Modal>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
