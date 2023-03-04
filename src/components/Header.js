import styled from 'styled-components';

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #bdcdd6;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #eee9da;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.9);
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
