import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MetaTagsList from './MetaTagsList';
import Author from './Author';

const ItemContainer = styled.li`
  display: flex;
  padding: 16px;
  border-bottom: clamp(1px, clac(1px * 1), calc(1px * 1)) solid
    hsl(210, 8%, 90%);
`;

const QuestionStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 108px;
  flex-wrap: wrap;
  font-size: 13px;
  gap: 6px;
  margin-bottom: 4px;
  margin-right: 16px;
  font-weight: 500;

  .answers-stats,
  .view-stats {
    color: hsl(210, 8%, 45%);
  }
`;

const QuestionSummary = styled.div`
  flex-grow: 1;
  max-width: 100%;

  a {
    text-decoration: none;
  }

  .question-title {
    color: hsl(206, 100%, 40%);
    margin-bottom: 0.3rem;
    margin-top: -0.15rem;
    padding-right: 24px;
    font-weight: 400;
    overflow-wrap: break-word;
    font-size: 1.3rem;
    hyphens: auto;
    cursor: pointer;
  }

  .question-content {
    overflow-wrap: break-word;
    hyphens: auto;
    color: hsl(210, 8%, 25%);
    overflow: hidden;
    margin-bottom: 8px;
    margin-top: -2px;
  }
`;

const QuestionMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const QuestionItem = ({ ele }) => {
  return (
    <ItemContainer>
      <QuestionStats>
        <span className="vote-stats">{ele.likeCount} votes</span>
        <span className="answers-stats">1 answers</span>
        <span className="view-stats">{ele.viewCount} views</span>
      </QuestionStats>
      <QuestionSummary>
        <Link to={`/${ele.questionId}`}>
          <h3 className="question-title">{ele.questionTitle}</h3>
        </Link>
        <div className="question-content">{ele.questionContent}</div>
        <QuestionMeta>
          <MetaTagsList></MetaTagsList>
          <Author name={ele.name} createdAt={ele.createdAt}></Author>
        </QuestionMeta>
      </QuestionSummary>
    </ItemContainer>
  );
};

export default QuestionItem;
