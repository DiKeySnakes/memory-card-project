import Header from './components/Header';
import Footer from './components/Footer';
import Canvas from './components/Canvas';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6096b4;
`;

function App() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Canvas />
        <Footer />
      </MainContainer>
    </div>
  );
}

export default App;
