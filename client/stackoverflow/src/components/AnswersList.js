import styled from 'styled-components';

import Answer from './Answer';

const AnswersHeader = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  h2 {
    flex: 1 auto;
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

const AnswersList = ({ answers }) => {
  return answers.length ? (
    <>
      <AnswersHeader>
        <h2>{answers.length} Answers</h2>
      </AnswersHeader>
      {answers.map(ele => (
        <Answer key={ele.answerId} ele={ele}></Answer>
      ))}
    </>
  ) : null;
};

export default AnswersList;
