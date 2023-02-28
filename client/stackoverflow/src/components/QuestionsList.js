import styled from 'styled-components';

import QuestionItem from './QuestionItem';

const ListContainer = styled.ol`
  width: auto;
  margin-bottom: 20px;
  margin-left: -24px;
  border-top: 1px solid hsl(210, 8%, 85%);
  list-style: none;
`;

const QuestionsList = ({ questions }) => {
  return questions.length ? (
    <ListContainer>
      {questions.map(ele => (
        <QuestionItem key={ele.questionId} ele={ele}></QuestionItem>
      ))}
    </ListContainer>
  ) : (
    'Loading...'
  );
};

export default QuestionsList;
