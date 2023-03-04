import Images from './Images';
import { shuffle } from 'lodash';
import uniqid from 'uniqid';
import { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
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
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

function Canvas() {
  const [cards, setCards] = useState(shuffle(Images));
  return (
    <CardContainer>
      {cards.map((elem) => {
        return (
          <Card key={uniqid()}>
            <Image key={uniqid()} src={elem[0]} alt={elem[1]} />
          </Card>
        );
      })}
    </CardContainer>
  );
}

export default Canvas;
