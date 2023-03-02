import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import QuestionsList from '../components/QuestionsList';
import QuestionItem from '../components/QuestionItem';
import { HeadContainer, MainContainer } from './Questions';
import AskButton from '../components/AskButton';

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://3.39.174.236:8080/questions?page=1',
    }).then(res => setQuestions(res.data.data));
  }, []);

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
          <QuestionsList questions={questions}></QuestionsList>
        </MainContainer>
      </Container>
    </>
  );
};

export default Home;
