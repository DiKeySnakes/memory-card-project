import styled from 'styled-components';
import GwentLogo from '../assets/images/GwentLogo.png';

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
`;

const Logo = styled.div`
  width: 12rem;
  height: 7rem;
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
  font-size: calc(2rem + 2vmin);
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
  font-size: calc(2rem + 2vmin);
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
  font-size: calc(2rem + 2vmin);
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
`;

function Header(props) {
  return (
    <Wrapper>
      <Title>
        <Logo>
          <img
            src={GwentLogo}
            alt='Gwent Logo'
            width='100%'
            height='100%'
            object-fit='contain'></img>
        </Logo>
        Memory Game
      </Title>
      <Score>
        <span>Score: {props.score}</span>
      </Score>
      <Best>
        <span>Best: {props.best}</span>
      </Best>
      <div></div>
    </Wrapper>
  );
}

export default Header;
