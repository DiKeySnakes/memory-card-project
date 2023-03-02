import styled from 'styled-components';

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ff4d00;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #fff;
  margin-left: 3rem;
`;

function Header() {
  return (
    <Wrapper>
      <Title>Memory Game</Title>
    </Wrapper>
  );
}

export default Header;
