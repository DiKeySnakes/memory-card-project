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
  const pull_data = (score, best) => {
    console.log(score, best);
    return { score, best };
  };

  return (
    <div>
      <Header />
      <MainContainer>
        <Canvas func={pull_data} />
        <Footer />
      </MainContainer>
    </div>
  );
}

export default App;
