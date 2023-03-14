import { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  font-size: calc(1.5rem + 2vmin);
  @media (max-width: 650px) {
    font-size: calc(1rem + 2vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.5rem + 2vmin);
  }
`;

const Logo = styled.div`
  width: calc(5rem + 5vmin);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
  margin-left: 3rem;
`;

const Title = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  white-space: nowrap;
  font-size: calc(0.5rem + 2vmin);
`;

const Score = styled.div`
  width: 15rem;
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
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
  margin-left: 1rem;
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
`;

const ButtonGroup = styled.div`
  width: 15vmin;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 3rem;

  i {
    transition: transform 0.3s ease-in-out;
  }

  i:hover {
    transform: scale(1.5);
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: calc(1.2rem + 2vmin);
  background-color: rgba(189, 205, 214, 1);
  border: none;
  cursor: pointer;
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
  @media (max-width: 650px) {
    font-size: calc(1rem + 2vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.5rem + 2vmin);
  }
`;

const audio = document.getElementById('audio');

function Header(props) {
  const [isPlaying, setIsPlaying] = useState(props.isPlaying);

  useEffect(() => {
    if (props.backgroundMusic === 'no') {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }, [props.backgroundMusic]);

  const pauseAudio = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const playAudio = () => {
    audio.play();
    setIsPlaying(true);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Logo>
          <img
            src={TheWitcherMedallionLogo}
            alt='Gwent Logo'
            width='100%'
            height='100%'
            object-fit='contain'></img>
        </Logo>
        <Title>
          <span>The Witcher</span>
          <span>Memory Game</span>
        </Title>
      </TitleWrapper>
      <Score>
        <span>Score: {props.score}</span>
      </Score>
      <Best>
        <span>Best: {props.best}</span>
      </Best>
      <ButtonGroup>
        <Button onClick={isPlaying ? pauseAudio : playAudio}>
          <i
            className={
              isPlaying ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark'
            }></i>
        </Button>
        <Button onClick={props.changeDifficulty}>
          <i className='fa-solid fa-trophy'></i>
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
}

export default Header;
