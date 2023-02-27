import { useState } from 'react';
import styled from 'styled-components';


const AskContainer = styled.div`
  padding: 60px;
  width: 100%;
  .askTitle {
    display: flex;
    align-items: center;
    height: 130px;
    font-size: 27px;
    font-weight: bold;
    color: #232629;
    margin-bottom: 16px;
    .askTitleBg {
      flex-grow: 1;
      height: 100%;
      background-size: contain;
      background-position: right;
      background-repeat: no-repeat;
      background-image: url("https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368");
    }
  }
  
  .writingInfo {
    width: 852px;
    background-color: #ebf4fb;
    padding: 24px;
    border: 1px solid hsl(205, 57%, 81%);
    border-radius: 3px;
    color: #3b4045;
    margin-bottom: 16px;
    h3 {
      font-size: 21px;
      font-weight: 400;
      margin: 0 0 8px;
    }
    p {
      font-size: 15px;
      margin: 0 0 15px;
    }
    ul {
      list-style: disc;
      font-size: 13px;
      h4 {
        font-weight: bold;
        margin: 0 0 8px;
      }
      li {
        font-weight: normal;
        margin-left: 32px;
      }
    }
  }
  .writingTitle,
  .writingProblem,
  .writingExpecting,
  .writingTags {
    display: flex;
    flex-direction: column;
    width: 852px;
    background-color: #fff;
    padding: 24px;
    border: 1px solid #e3e6e8;
    border-radius: 3px;
    margin-bottom: 16px;
    .labelTitle {
      font-size: 15px;
      font-weight: bold;
      padding: 0 2px;
    }
    .inputWrapper {
      position: relative;
      input, textarea {
        width: 100%;
      }
      span {
        position: absolute;
        color: #c2223e;
        font-size: 20px;
        right: 10px;
        top: 8px;
      }
    }
    label {
      font-size: 12px;
      margin-bottom: 6px;
    }
    input,
    textarea {
      padding: 7.8px 9.1px;
      border: 1px solid #e3e6e8;
      border-radius: 3px;
      outline: none;
      box-shadow: none;
      &:focus {
        border: 1px solid #0074cc;
        box-shadow: 0 0 2px 4px #cde9fe;
      }
      &.error {
        border: 1px solid #d0393e;
        color: #000;
        box-shadow: none;
      }
    }
    .tagsName {
      display: flex;
      font-size: 12px;
      margin-bottom: 6px;
      .exampleTags {
        font-weight: bold;
      }
      div {
        span {
          margin-left: 6px;
          color: #3b4045;
        }
      }
    }
    .tagsInput {
      padding: 7.8px 9.1px;
      border: 1px solid #e3e6e8;
      border-radius: 3px;
      outline: none;
      box-shadow: none;
      &:focus-within {
        border: 1px solid #0074cc;
        box-shadow: 0 0 2px 4px #cde9fe;
      }
      input {
        padding: 0;
        border: 0;
        background-color: transparent;
        outline: none;
        box-shadow: none;
        width: 30%;
      }
      span {
        font-size: 12px;
        background-color: #e1ecf4;
        color: #39749d;
        padding: 4.8px 6px;
        margin: 0 2px 2px 0;
        border-radius: 3px;
      }
      button {
        border: 0;
        background-color: transparent;
        color: #39749d;
        font-weight: bold;
      }
    }
  }
  .buttons {
    .submitButton {
      padding: 10px;
      background-color: #0a95ff;
      color: #fff;
      border: 0;
      border-radius: 3px;
      &:hover {
        cursor: pointer;
      }
    }
    .deleteButton {
      padding: 10px;
      background-color: #fff;
      color: #c2223e;
      border: 0;
      border-radius: 3px;
      margin-left: 16px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .error {
    color: #d0393e;
    font-size: 12px;
    margin: 2px 0;
    padding: 2px;
  }
`;

const Ask = () => {
  const [question, setQuestion] = useState({});

  const Title = () => {
    return (
      <div className='writingTitle'>
        <h3>Title</h3>
        <br />
        <div>
          Be specific and imagine you’re asking a question to another person.
        </div>
        <input
          type="text"
          placeholder="예시"  
          onChange={(e) => {
            setQuestion(Object.assign(question, { title: e.target.value }));
          }}
          value={question.title}
        ></input>
        <div className='buttons'>
        <button className='submitButton'>Next</button>
        </div>
      </div>
    );
  };

  function Problem() {
    return (
      <div className='writingProblem'>
        <h3>What are the details of your problem?</h3>
        <br />
        <div>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </div>
        <input
          type="text"
          onChange={(e) => {
            setQuestion(Object.assign(question, { problem: e.target.value }));
          }}
        ></input>
      </div>
    );
  }
  function Expect() {
    return (
      <div className='writingExpecting'>
        <h3>What did you try and what were you expecting?</h3>
        <br />
        <div>
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </div>
        <input
          type="text"
          onChange={(e) => {
            setQuestion(Object.assign(question, { expect: e.target.value }));
          }}
        ></input>
      </div>
    );
  }

  const Tags = () => {
    return (
      <div className='writingExpecting'>
        <h3>Tags</h3>
        <br />
        <div>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </div>
        <input
          type="text"
          placeholder="예시"
          onChange={(e) => {
            setQuestion(Object.assign(question, { tags: e.target.value }));
          }}
          value={question.tags}
        ></input>
      </div>
    );
  };

  return (
    <AskContainer>
      <div className="askTitle">
        <h1>Ask a public question</h1>
        <div className="askTitleBg"></div>
      </div>
    <div className='center'>
      <Title />
      <Problem />
      <Expect />
      <Tags />
      <div className='buttons'>
          <button type='button' className='submitButton'>Review your question</button>
          <button type='button' className='deleteButton'>Discard draft</button>
        </div>
      </div>
    </AskContainer>
  );
}

export default Ask;