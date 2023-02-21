import { Link } from 'react-router-dom';

import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import QuestionsList from '../components/QuestionsList';
import QuestionItem from '../components/QuestionItem';
import { HeadContainer, MainContainer } from './Questions';

const Home = () => {
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <MainContainer>
          <HeadContainer>
            <h1>Top Questions</h1>
            <div>
              <Link to="/ask">Ask Question</Link>
            </div>
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
