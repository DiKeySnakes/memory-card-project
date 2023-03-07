import Header from './Header';
import Footer from './Footer';
import Images from './Images';
import { shuffle } from 'lodash';
import { useState, useEffect } from 'react';
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

const CardContainer = styled.div`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 870px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee9da;
  border: 2px solid black;
  border-radius: 1rem;
  margin: 0 1rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  &:hover {
    transform: scale(1.1);
  }
  overflow: hidden;
  &[data-clicked='true'] {
    background-color: gray;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

function Canvas(props) {
  const [cards, setCards] = useState(shuffle(Images));
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

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

  const card = document.querySelectorAll('[data-clicked]');

  useEffect(() => {
    if (score > best) {
      setBest(score);
    }
  }, [score, best]);

  useEffect(() => {
    if (score === cards.length) {
      setIsGameOver(true);
      console.log('YOU WIN THE GAME!!!');
      setCards(shuffle(cards));
      setScore(0);
      setClicked([]);
      card.forEach((elem) => {
        return (elem.dataset.clicked = 'false');
      });
      setIsGameOver(false);
    }
  }, [score, cards, clicked, card]);

  const handleClick = (e) => {
    const target = e.target.parentNode;

    if (!isGameOver) {
      if (!clicked.includes(target.dataset.id)) {
        target.dataset.clicked = 'true';
        setScore(score + 1);
        setClicked(clicked.concat(target.dataset.id));
        setCards(shuffle(cards));
      } else {
        setIsGameOver(true);
        console.log('GAME OVER!!!');
        openModal();
      }
    } else {
      console.log('Please Start New Game!');
      openModal();
    }
  };

  const startNewGame = () => {
    setCards(shuffle(cards));
    setScore(0);
    setClicked([]);
    card.forEach((elem) => {
      return (elem.dataset.clicked = 'false');
    });
    setIsGameOver(false);
    closeModal();
  };

  return (
    <>
      <Header score={score} best={best} />
      <CardContainer>
        {cards.map((elem) => {
          return (
            <Card
              key={elem.id}
              data-id={elem.id}
              data-clicked='false'
              onClick={handleClick}>
              <Image key={elem.id} src={elem.src} alt={elem.name} />
            </Card>
          );
        })}
      </CardContainer>
      <Footer />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Game Over!</h1>
        <div>Please Start New Game</div>
        <Button onClick={startNewGame}>New Game</Button>
      </Modal>
    </>
  );
}

export default Canvas;