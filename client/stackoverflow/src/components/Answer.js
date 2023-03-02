import styled from 'styled-components';

import VoteBar from './VoteBar';
import { FaUser } from 'react-icons/fa';

const AnswerContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  padding: 16px 0;
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const AnswerContent = styled.div`
  width: auto;
  padding-right: 16px;
  grid-column: 2;
  vertical-align: top;
`;

const DetailContainer = styled.div`
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 4px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const EditContainer = styled.div`
  margin: 4px;
  margin-right: 16px;
  margin-left: 0;
  padding-top: 2px;
  width: 96px;
  flex: 1 auto;
  display: flex;
  flex-wrap: wrap;
  color: hsl(210, 8%, 45%);

  > button {
    margin: 4px;
    color: hsl(210, 8%, 45%);
    background: transparent;
    border: none;
  }
`;

const AuthorContainer = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 3px;
  background-color: rgb(
    216.75,
    calc(216.75 + 115.6 * 0.15),
    calc(216.75 + 204 * 0.15)
  );
  width: 200px;
  padding: 5px 6px 7px 7px;
  color: hsl(210, 8%, 45%);
`;

const AuthorAnsweredTime = styled.div`
  margin-top: 1px;
  margin-bottom: 4px;
  font-size: 12px;
`;

const AuthorAvatar = styled.div`
  float: left;
  width: 32px;
  height: 32px;
  cursor: pointer;

  > svg {
    width: 32px;
    height: 32px;
  }
`;

const AuthorDetail = styled.div`
  margin-left: 8px;
  width: calc(100% - 40px);
  float: left;

  a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
    word-wrap: break-word;
  }
`;

const Answer = ({ ele }) => {
  return (
    <AnswerContainer>
      <VoteBar total={ele.likeCount - ele.hateCount}></VoteBar>
      <AnswerContent>
        <DetailContainer>{ele.answerContent}</DetailContainer>
        <InfoContainer>
          <EditContainer>
            <button>Share</button>
            <button>Edit</button>
            <button>Follow</button>
          </EditContainer>
          <AuthorContainer>
            <AuthorAnsweredTime>
              answered<span>{ele.createdAt}</span>
            </AuthorAnsweredTime>
            <AuthorAvatar>
              <FaUser></FaUser>
            </AuthorAvatar>
            <AuthorDetail>
              <a>{ele.name}</a>
            </AuthorDetail>
          </AuthorContainer>
        </InfoContainer>
      </AnswerContent>
    </AnswerContainer>
  );
};

export default Answer;
