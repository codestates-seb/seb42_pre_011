import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

  > img {
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
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <QuestionDetailMainContainer>
          <QuestionHeader>
            <h1>this is question detail title long</h1>
            <AskButton>
              <Link to="/ask">Ask Question</Link>
            </AskButton>
          </QuestionHeader>
          <QuestionStats>
            <div className="asked-at">
              <span>Asked</span>
              <time>4 years, 8 months ago</time>
            </div>
            <div className="modified-at">
              <span>Modified</span>
              <time>4 years, 1 month ago</time>
            </div>
            <div className="view-stats">
              <span>Viewed</span>
              <span>185 times</span>
            </div>
          </QuestionStats>
          <div className="detail-main">
            <QuestionBody>
              <VoteBar></VoteBar>
              <QuestionContent>
                <DetailContainer>
                  How do I display an alert dialog in flutter without user
                  interaction? I have a Widget that shows a ListView. When a
                  specific condition is true, I want to display an alert dialog
                  within the same widget (everything is a widget in Flutter,
                  right?). So no user interaction is needed. this is the build
                  method of my widget:
                </DetailContainer>
                <TagsContainer>
                  <ul>
                    <Tag></Tag>
                  </ul>
                </TagsContainer>
                <InfoContainer>
                  <EditContainer>
                    <button>Share</button>
                    <button>Edit</button>
                    <button>Follow</button>
                  </EditContainer>
                  <AuthorContainer>
                    <AuthorAskedTime>
                      asked<span>Jun 5, 2018 at 12:40</span>
                    </AuthorAskedTime>
                    <AuthorAvatar>
                      <img
                        src="https://www.gravatar.com/avatar/e4cdd5ac29579af2c5f457df6fcb89f6?s=64&d=identicon&r=PG"
                        alt="Cris's avatar"></img>
                    </AuthorAvatar>
                    <AuthorDetail>
                      <a>Cris</a>
                    </AuthorDetail>
                  </AuthorContainer>
                </InfoContainer>
              </QuestionContent>
            </QuestionBody>
            <AnswersBody>
              <AnswersList></AnswersList>
              <AnswerEditor></AnswerEditor>
            </AnswersBody>
          </div>
        </QuestionDetailMainContainer>
      </Container>
    </>
  );
};

export default Detail;
