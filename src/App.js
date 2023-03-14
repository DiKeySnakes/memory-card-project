import Canvas from './components/Canvas';
import EasyLevelImages from './components/EasyLevelImages.js';
import MediumLevelImages from './components/MediumLevelImages.js';
import HardLevelImages from './components/HardLevelImages.js';
import Tw3FiendLogo from './assets/images/Tw3FiendLogo.png';
import Tw3GeraltHorsemanLogo from './assets/images/Tw3GeraltHorsemanLogo.png';
import Tw3KernunLogo from './assets/images/Tw3KernunLogo.png';
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

const MainParagraph = styled.p`
  color: #f00;
  font-size: 2rem;
  line-height: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Card = styled.div`
  width: 25rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee9da;
  border: none;
  border-radius: 1rem;
  margin: 0 1rem;
  margin-top: 2rem;
  overflow: hidden;
  @media (max-width: 870px) {
    width: 22rem;
    height: 27rem;
  }
  @media (max-width: 650px) {
    width: 20rem;
    height: 25rem;
  }
  @media (max-width: 430px) {
    width: 12rem;
    height: 15rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ButtonGroup = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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

const RadioButtonsContainer = styled.div`
  width: 40%;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  color: #f00;
  font-size: 1.5rem;
  line-height: 1.6rem;
  font-weight: 600;
`;

const RadioBox = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid #b9bdcf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.4rem;
  transition: background 0.15s, border-color 0.15s;
  padding: 2px;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    background: #2266dc;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
  }
`;

const Input = styled.input`
  display: none;
  &:checked + ${RadioBox} {
    &::after {
      transform: scale(1);
    }
  }
`;

function App() {
  useEffect(() => {
    openModal();
  }, []);

  const [difficultyLevel, setDifficultyLevel] = useState(EasyLevelImages);
  const [backgroundMusic, setBackgroundMusic] = useState('yes');

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setBackgroundMusic(target.value);
    }
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
    subtitle.style.fontSize = 'calc(1.5rem + 2vmin)';
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
        <MainParagraph>Get points by clicking on an image</MainParagraph>
        <MainParagraph>But don't click on any more than once!</MainParagraph>
        <ImageContainer>
          <Card>
            <Image src={Tw3FiendLogo} alt={'Fiend'}></Image>
          </Card>
          <Card>
            <Image src={Tw3GeraltHorsemanLogo} alt={'Geralt'}></Image>
          </Card>
          <Card>
            <Image src={Tw3KernunLogo} alt={'Kernun'}></Image>
          </Card>
        </ImageContainer>
        <ButtonGroup>
          <Button onClick={handleClickEasy}>Easy</Button>
          <Button onClick={handleClickMedium}>Medium</Button>
          <Button onClick={handleClickHard}>Hard</Button>
        </ButtonGroup>
        <RadioButtonsContainer>
          <Paragraph>Play Background Music?</Paragraph>
          <Label id='yes'>
            <Input
              type='radio'
              name='background-music'
              id='yes'
              value='yes'
              checked={true}
              onChange={handleChange}
            />
            <RadioBox></RadioBox>
            <Paragraph>Yes</Paragraph>
          </Label>
          <Label id='no'>
            <Input
              type='radio'
              name='background-music'
              id='no'
              value='no'
              onChange={handleChange}
            />
            <RadioBox></RadioBox>
            <Paragraph>No</Paragraph>
          </Label>
        </RadioButtonsContainer>
      </Modal>
    </div>
  );
}

export default App;
