import Images from './Images';
import { shuffle } from 'lodash';
// import uniqid from 'uniqid';
import { useState } from 'react';
import styled from 'styled-components';

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

  const handleClick = (e) => {
    const target = e.target.parentNode;
    if (!isGameOver) {
      if (!clicked.includes(target.dataset.id)) {
        console.log('target dataset id:', target.dataset.id);
        target.dataset.clicked = 'true';
        setScore(score + 1);
        console.log('score:', score);
        setClicked(clicked.concat(target.dataset.id));
        console.log(clicked);
        if (score > best) {
          setBest(score);
          console.log('best:', best);
        }
        setCards(shuffle(cards));
      } else {
        setIsGameOver(true);
        console.log('GAME OVER!!!');
      }
    } else {
      console.log('Please Start New Game!');
    }
  };

  props.func(score, best);

  return (
    // [score, best],
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
  );
}

export default Canvas;
