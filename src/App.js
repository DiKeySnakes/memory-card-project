import Canvas from './components/Canvas';
import EasyLevelImages from './components/EasyLevelImages.js';
import MediumLevelImages from './components/MediumLevelImages.js';
import HardLevelImages from './components/HardLevelImages.js';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid black',
    borderRadius: '1rem',
    backgroundColor: '#eee9da',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space around',
    alignItems: 'center',
    fontSize: '2rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6096b4;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 2rem;
  background-color: rgba(189, 205, 214, 1);
  border: 2px solid rgba(202, 173, 114, 0.7);
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
  &:hover {
    background-color: rgba(189, 205, 214, 0.7);
    border: 2px solid rgba(202, 173, 114, 1);
  }
`;

function App() {
  useEffect(() => {
    openModal();
  }, []);

  const [difficultyLevel, setDifficultyLevel] = useState(EasyLevelImages);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClickEasy = () => {
    setDifficultyLevel(EasyLevelImages);
    closeModal();
  };

  const handleClickMedium = () => {
    setDifficultyLevel(MediumLevelImages);
    closeModal();
  };

  const handleClickHard = () => {
    setDifficultyLevel(HardLevelImages);
    closeModal();
  };

  const changeDifficulty = () => {
    openModal();
  };

  return (
    <div>
      <MainContainer>
        <Canvas
          difficultyLevel={difficultyLevel}
          changeDifficulty={changeDifficulty}
        />
      </MainContainer>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          Welcome to the Witcher Memory Game
        </h2>
        <div>Please choose your difficulty level</div>
        <Button onClick={handleClickEasy}>Easy</Button>
        <Button onClick={handleClickMedium}>Medium</Button>
        <Button onClick={handleClickHard}>Hard</Button>
      </Modal>
    </div>
  );
}

export default App;
