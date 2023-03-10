import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import QuestionsList from '../components/QuestionsList';
import AskButton from '../components/AskButton';

export const MainContainer = styled.main`
  max-width: 1100px;
  width: calc(100% - 324px);
  border: 1px solid hsl(210, 8%, 85%);
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
`;

export const HeadContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  flex-wrap: wrap;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 12px;
    margin-right: 12px;
    flex: 1 auto;
  }
`;

const QuestionsController = styled.div`
  display: flex;
  margin-bottom: 12px;
  justify-content: space-between;
  align-items: center;

  .total-questions {
    font-size: 1.3rem;
    margin-right: 12px;
    flex: 1 auto;
  }
`;

const FilterController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 1px;

  div {
    margin-right: -1px;
    margin-bottom: 1px;
    border: 1px solid hsl(210, 8%, 55%);
    color: hsl(210, 8%, 25%);
    font-size: 12px;
    padding: 0.8em;
    cursor: pointer;
    font-weight: normal;
  }

  div:hover {
    background-color: hsl(210, 8%, 97.5%);
    color: hsl(210, 8%, 35%);
  }

  .newest-btn {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .vote-btn {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-right: 0;
  }
`;

export const Questions = () => {
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
            <h1>All Questions</h1>
            <AskButton>
              <Link to="/ask">Ask Question</Link>
            </AskButton>
          </HeadContainer>
          <QuestionsController>
            <div className="total-questions">{questions.length} questions</div>
            <FilterController>
              <div className="newest-btn">Newest</div>
              <div className="unanswered-btn">Unanswered</div>
              <div className="view-btn">View</div>
              <div className="vote-btn">Vote</div>
            </FilterController>
          </QuestionsController>
          <QuestionsList questions={questions}></QuestionsList>
        </MainContainer>
      </Container>
    </>
  );
};
