import styled from 'styled-components';
// import { useState } from 'react';
import audioMp3 from '../assets/audio/audioMp3.mp3';
import TheWitcherMedallionLogo from '../assets/images/TheWitcherMedallionLogo.png';

const Wrapper = styled.div`
  width: 100vw;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #bdcdd6;
  position: fixed;
  border-bottom: 2px solid black;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  top: 0;
  left: 50%;
  margin-left: -50vw;
  z-index: 10;
  font-size: calc(1rem + 2vmin);
`;

const Logo = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 1rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* font-size: calc(2rem + 2vmin); */
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
  margin-left: 3rem;
`;

const Score = styled.div`
  width: 15rem;
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* font-size: calc(2rem + 2vmin); */
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
`;

const Best = styled.div`
  width: 15rem;
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* font-size: calc(2rem + 2vmin); */
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  /* font-size: calc(2rem + 2vmin); */
  background-color: rgba(189, 205, 214, 1);
  border: 2px solid rgba(202, 173, 114, 0.7);
  border-radius: 1rem;
  cursor: pointer;
  margin-right: 5rem;
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
  &:hover {
    background-color: rgba(189, 205, 214, 0.7);
    border: 2px solid rgba(202, 173, 114, 1);
  }
`;

function Header(props) {
  const audio = new Audio(audioMp3);
  audio.loop = true;
  audio.volume = 0.2;

  const playAudio = () => {
    audio.play();
  };

  // const pauseAudio = () => {
  //   audio.pause();
  // };

  return (
    <Wrapper>
      <Title>
        <Logo>
          <img
            src={TheWitcherMedallionLogo}
            alt='Gwent Logo'
            width='100%'
            height='100%'
            object-fit='contain'></img>
        </Logo>
        The Witcher Memory Game
      </Title>
      <Score>
        <span>Score: {props.score}</span>
      </Score>
      <Best>
        <span>Best: {props.best}</span>
      </Best>
      <Button onClick={playAudio}>
        <i className='fa-solid fa-volume-high'></i>
      </Button>
      <Button onClick={props.changeDifficulty}>
        <i className='fa-solid fa-trophy'></i>
      </Button>
    </Wrapper>
  );
}

export default Header;
