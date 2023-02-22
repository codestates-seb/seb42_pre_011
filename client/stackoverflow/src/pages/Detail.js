import { Link } from "react-router-dom";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import QuestionDetail from "../components/DetailContainer";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTop = styled.div`
  display: flex;
  flex-direction: column;

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

  & .titleAndButton {
    display: flex;
    margin-bottom: 1.2rem;
    justify-content: space-between;
    align-items: center;

    & > h1 {
      color: #3b4045;
      font-size: 2.7rem;
      overflow-wrap: break-word;
      display: block;
      text-align: left;
    }
  }
`;

const QuestionMetaInfoWrapper = styled.div`
  display: flex;
  padding-bottom: 0.8rem;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;
  border-color: hsl(210deg 8% 90%);
  border-bottom-style: solid;
  border-bottom-width: 0.1rem;
  text-align: left;

  > div {
    color: #6a737c;
    font-size: 1.3rem;
    margin-right: 1.6rem;
  }
`;

const MainLeftRightWrapper = styled.div`
  display: flex;
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnswerWapper = styled.div`
  padding-top: 1rem;
`;

const AnswerFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  margin-top: 1rem;

  > h2 {
    font-weight: 400;
    font-size: 1.9rem;
  }
`;

const AnswerFilterSelectBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  > div {
    font-size: 1.2rem;
  }

  > select {
    position: relative;
    padding: 0.78rem 3.2rem 0.78rem 0.91rem;
    border: 0.1rem solid hsl(210deg 8% 75%);
    border-radius: 0.3rem;
    background-color: #fff;
    outline: 0;
    font-size: 1.3rem;
    color: #0c0d0e;
  }
`;

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;

  > h2 {
    font-weight: 400;
    font-size: 1.9rem;
    padding-top: 2rem;
  }
`;

const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.4rem;
`;

export const QuestionMetaInfo = (props) => {
  return (
    <QuestionMetaInfoWrapper>
      {/* today, yesterday, n days ago */}
      <div>Asked {props.asked}</div>
      <div>Modified {props.modified}</div>
      <div>Viewed {props.viewed}</div>
    </QuestionMetaInfoWrapper>
  );
};

export const AnswerFilter = (props) => {
  return (
    <AnswerFilterWrapper>
      <h2>{props.answerCount}Answer</h2>
      <AnswerFilterSelectBoxWrapper>
        <div>Sorted by:</div>
        <select defaultValue={"highest"}>
          <option value="highest"> Highest score (default) </option>
          <option value="oldest"> Date created (oldest first) </option>
        </select>
      </AnswerFilterSelectBoxWrapper>
    </AnswerFilterWrapper>
  );
};

const Detail = () => {
  const [detailData, setDetailData] = useState({});

  const upButtonClick = () => {
    console.log("up!");
  };

  const downButtonClick = () => {
    console.log("down!");
  };

  return (
    <Container>
      <Sidebar></Sidebar>
      <MainTop>
        <div className="titleAndButton">
          <h1>React Contact form get 404 not found</h1>
          <div>
            <Link to="/ask">Ask Question</Link>
          </div>
        </div>
        <QuestionMetaInfo
          asked={detailData.createdAt || "unknown"}
          modified={detailData.lastModifiedAt || "unknown"}
          viewed={detailData.viewCount || "unknown"}
        />
      </MainTop>
      <MainLeftRightWrapper>
        <MainLeft></MainLeft>
      </MainLeftRightWrapper>
    </Container>
  );
};

export default Detail;
