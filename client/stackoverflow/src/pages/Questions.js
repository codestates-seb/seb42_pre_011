import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import QuestionsList from '../components/QuestionsList';

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

  div {
    margin-bottom: 12px;
  }

  a {
    background-color: hsl(206, 100%, 52%);
    color: hsl(0, 0%, 100%);
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
    font-size: 13px;
    padding: 0.8em;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    background-color: hsl(206, 100%, 40%);
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
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <MainContainer>
          <HeadContainer>
            <h1>All Questions</h1>
            <div>
              <Link to="/ask">Ask Question</Link>
            </div>
          </HeadContainer>
          <QuestionsController>
            <div className="total-questions">22,222,222 questions</div>
            <FilterController>
              <div className="newest-btn">Newest</div>
              <div className="unanswered-btn">Unanswered</div>
              <div className="view-btn">View</div>
              <div className="vote-btn">Vote</div>
            </FilterController>
          </QuestionsController>
          <QuestionsList></QuestionsList>
        </MainContainer>
      </Container>
    </>
  );
};
