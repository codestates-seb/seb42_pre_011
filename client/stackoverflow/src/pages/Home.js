import { Link } from 'react-router-dom';

import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import QuestionsList from '../components/QuestionsList';
import QuestionItem from '../components/QuestionItem';
import { HeadContainer, MainContainer } from './Questions';
import AskButton from '../components/AskButton';

const Home = () => {
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <MainContainer>
          <HeadContainer>
            <h1>Top Questions</h1>
            <AskButton>
              <Link to="/ask">Ask Question</Link>
            </AskButton>
          </HeadContainer>
          <QuestionsList>
            <QuestionItem></QuestionItem>
          </QuestionsList>
        </MainContainer>
      </Container>
    </>
  );
};

export default Home;
