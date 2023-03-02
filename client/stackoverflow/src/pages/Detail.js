import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Viewer } from '@toast-ui/react-editor';

import { FaUser } from 'react-icons/fa';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import { MainContainer } from './Questions';
import VoteBar from '../components/VoteBar';
import AskButton from '../components/AskButton';
import Tag from '../components/Tag';
import AnswersList from '../components/AnswersList';
import AnswerEditor from '../components/AnswerEditor';

const QuestionDetailMainContainer = styled(MainContainer)`
  width: calc(100% - 164px);

  > .detail-main {
    width: calc(100% - 324px);
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 8px;
    flex: 1 auto;
    overflow-wrap: break-word;
    font-weight: normal;
    color: hsl(210, 8%, 25%);
  }
`;

const QuestionStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid hsl(210, 8%, 90%);

  .asked-at,
  .modified-at {
    margin-bottom: 8px;
    margin-right: 16px;
  }

  span {
    color: hsl(210, 8%, 45%);
    margin-right: 2px;
  }
`;

const QuestionBody = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const QuestionContent = styled.div`
  width: auto;
  padding-right: 16px;
  grid-column: 2;
  vertical-align: top;
`;

const DetailContainer = styled.div`
  width: 100%;
`;

const TagsContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;

  ul {
    display: flex;
    flex-wrap: wrap;
  }
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

const AuthorAskedTime = styled.div`
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

const AnswersBody = styled.div`
  width: auto;
  padding-top: 10px;
`;

const Detail = () => {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://3.39.174.236:8080/questions/${id}/1`,
    }).then(res => {
      setQuestion(res.data.data.question);
      setAnswers(res.data.data.answers);
    });
  }, [id]);

  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <QuestionDetailMainContainer>
          <QuestionHeader>
            <h1>{question.questionTitle}</h1>
            <AskButton>
              <Link to="/ask">Ask Question</Link>
            </AskButton>
          </QuestionHeader>
          <QuestionStats>
            <div className="asked-at">
              <span>Asked</span>
              <time>{question.createdAt}</time>
            </div>
            <div className="modified-at">
              <span>Modified</span>
              <time>{question.modifiedAt}</time>
            </div>
            <div className="view-stats">
              <span>Viewed</span>
              <span>{`${question.viewCount} times`}</span>
            </div>
          </QuestionStats>
          <div className="detail-main">
            <QuestionBody>
              <VoteBar
                total={question.likeCount - question.hateCount}></VoteBar>
              <QuestionContent>
                <DetailContainer>
                  {question.questionContent && (
                    <Viewer initialValue={question.questionContent}></Viewer>
                  )}
                </DetailContainer>
                <TagsContainer>
                  <ul>
                    <Tag></Tag>
                  </ul>
                </TagsContainer>
                <InfoContainer>
                  <EditContainer>
                    <button>Share</button>
                    <button onclink="location.href='/Edit'">Edit</button>
                    <button>Follow</button>
                  </EditContainer>
                  <AuthorContainer>
                    <AuthorAskedTime>
                      asked<span>{question.createdAt}</span>
                    </AuthorAskedTime>
                    <AuthorAvatar>
                      <FaUser></FaUser>
                    </AuthorAvatar>
                    <AuthorDetail>
                      <a>{question.name}</a>
                    </AuthorDetail>
                  </AuthorContainer>
                </InfoContainer>
              </QuestionContent>
            </QuestionBody>
            <AnswersBody>
              <AnswersList answers={answers}></AnswersList>
              <AnswerEditor></AnswerEditor>
            </AnswersBody>
          </div>
        </QuestionDetailMainContainer>
      </Container>
    </>
  );
};

export default Detail;
