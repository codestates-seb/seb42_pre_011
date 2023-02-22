import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdError } from 'react-icons/md';
import axios from 'axios';

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

const AskPage = () => {
  // input value
  const [inputValue, setInputValue] = useState({
    title: '',
    problemContent: '',
    expectContent: '',
  })
  
  const { title, problemContent, expectContent } = inputValue;

  // tag
  const [tags, setTags] = useState(null);
  const [tagValue, setTagValue] = useState([]);
  
  // title error
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const [titleState, setTitleState] = useState(false);
  // content error
  const [problemError, setProblemError] = useState(false);
  const [problemErrorMessage, setProblemErrorMessage] = useState('');
  const [problemState, setProblemState] = useState(false);
  const [expectError, setExpectError] = useState(false);
  const [expectErrorMessage, setExpectErrorMessage] = useState('');
  const [expectState, setExpectState] = useState(false);
  // tag error
  const [tagError, setTagError] = useState(false);
  const [tagErrorMessage, setTagErrorMessage] = useState('');
  const [tagState, setTagState] = useState(false);

  // memberId
  const member = JSON.parse(localStorage.getItem('user'))

  // get으로 tag data 받아오기
  useEffect(() => {
    axios.get("http://3.39.203.17:8080/tags?page=1&size=20")
    .then((res) => {
      setTags(res.data.data)
    })
    .catch((err) => console.log(err.message));
  },[]);

  // e.target name/value를 inputValue 객체에 복사
  const onChangeValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  // tags 추가
  const addTag = (e) => {
    if(e.length !== 0 && tags.filter((el) => el.name === e)) {
      const filterTags = tags.filter((el) => el.name === e)
      filterTags.forEach((el) => delete el.content);
      setTagValue([...tagValue, ...filterTags]);
    }
  };

  // tags 삭제
  const deleteTag = (tagId) => {
    const filterTag = tagValue.filter((el) => el.tagId !== tagId);
    setTagValue(filterTag);
  };

  // 입력한 값 초기화 버튼
  const deleteValue = (e) => {
    setInputValue({
      title: "",
      problemContent: "",
      expectContent: "",
    });
    setTagValue([]);
    setTitleError(false);
    setProblemError(false);
    setExpectError(false);
    setTagError(false);
  }

  // submit button
  const handleSubmit = () => {
    // 유효성 검사
    if(title === '') {
      setTitleError(true);
      setTitleErrorMessage('Title is missing.');
    } else if(title.length < 15) {
      setTitleError(true);
      setTitleErrorMessage('Title must be at least 15 characters.');
    } else {
      setTitleError(false);
      setTitleState(true);
    }

    if(problemContent === '') {
      setProblemError(true);
      setProblemErrorMessage('Problem content is missing.');
    } else if(problemContent.length < 20) {
      setProblemError(true);
      setProblemErrorMessage('Problem content must be at least 20 characters.');
    } else {
      setProblemError(false);
      setProblemState(true);
    }

    if(expectContent === '') {
      setExpectError(true);
      setExpectErrorMessage('Expect content is missing.');
    } else if(expectContent.length < 20) {
      setExpectError(true);
      setExpectErrorMessage('Expect content must be at least 20 characters.');
    } else {
      setExpectError(false);
      setExpectState(true);
    }

    if(tagValue.length === 0) {
      setTagError(true);
      setTagErrorMessage('There must be at least one tag.');
    } else {
      setTagError(false);
      setTagState(true);
    }

    if(titleState && problemState && expectState && tagState) {
      const data = {
        memberId : member.memberId,
        ...inputValue,
        questionTags: tagValue,
      }
      
      // question post 요청 보내기
      axios({
        method : "post",
        url: "http://3.39.203.17:8080/questions",
        data,
        headers: {
          'Content-Type' : 'application/json;charset=UTF-8',
          'Accept': 'application/json'
        }          
      })
      .then((res) => {
        alert('등록 완료 👍');
        console.log(res.data);
        window.location.replace('/');
      })
      .catch((err) => console.log(err.message));
    }
  }
  
  if (!window.localStorage.getItem("user")) {
    return null;
  }

  return (
    <AskContainer>
      <div className="askTitle">
        <h2>Ask a public question</h2>
        <div className="askTitleBg"></div>
      </div>
      <div className="writingInfo">
        <h3>Writing a good question</h3>
        <p>
          You’re ready to ask a programming-related question and this form will
          help guide you through the process. <br />
          Looking to ask a non-programming question? See the topics here to find
          a relevant site.
        </p>
        <ul>
          <h4>Steps</h4>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <form>
        <div className='writingTitle'>
          <label for='title' className='labelTitle'>Title</label>
          <label for='title'>Be specific and imagine you’re asking a question to another person.</label>
          <div className='inputWrapper'>
            <input name='title' type='text' id='title' className={titleError && title.length < 15 ? "error" : ""} placeholder='e.g. Is there an R function for finding the index of an element in a vector?' value={title} onChange={onChangeValue} />
            {titleError && title.length < 15 ? <span><MdError /></span> : null}
          </div>
          {titleError && title.length < 15 ? <div className='error'>{titleErrorMessage}</div> : null}
        </div>
        <div className='writingProblem'>
          <label for='problem' className='labelTitle'>What are the details of your problem?</label>
          <label for='problem'>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</label>
          <div className='inputWrapper'>
            <textarea id='problem' name='problemContent' className={problemError && problemContent.length < 20 ? "error" : ""} value={problemContent} onChange={onChangeValue}></textarea>
            {problemError && problemContent.length < 20 ? <span><MdError /></span> : null}
          </div>
          {problemError && problemContent.length < 20 ? <div className='error'>{problemErrorMessage}</div> : null}
        </div>
        <div className='writingExpecting'>
          <label for='expecting' className='labelTitle'>What did you try and what were you expecting?</label>
          <label for='expecting'>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</label>
          <div className='inputWrapper'>
            <textarea id='expecting' name='expectContent' className={expectError && expectContent.length < 20 ? "error" : ""} value={expectContent} onChange={onChangeValue}></textarea>
            {expectError && expectContent.length < 20 ? <span><MdError /></span> : null}
          </div>
        {expectError && expectContent.length < 20 ? <div className='error'>{expectErrorMessage}</div> : null}
        </div>
        <div className='writingTags'>
          <label for='tags' className='labelTitle'>Tags</label>
          <label for='tags'>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</label>
          <div className='tagsName'>
            <div className='exampleTags'>example tags :</div>
            {tags && tags.map((el) => {
              return (
                <div>
                  <span>{el.name}</span>
                </div>
              )
            })}
          </div>
          <div className='tagsInput'>
            {tagValue && tagValue.map((el, idx) => (
                <span key={idx}>{el.name}
                  <button type='button' onClick={() => deleteTag(el.tagId)}>X</button>
                </span>
            ))}
              <input type='text' id='tags' placeholder={tagValue.length !== 0 ? '' : 'e.g. (c# laravel typescript)'} onKeyUp={(e) => {
                if(e.key === 'Enter') {
                  addTag(e.target.value);
                  e.target.value = null;
                } else if(e.key === 'Backspace') {};
              }} />
          </div>
        {tagError && tagValue.length === 0 ? <div className='error'>{tagErrorMessage}</div> : null}
        </div>
        <div className='buttons'>
          <button type='button' className='submitButton' onClick={handleSubmit}>Review your question</button>
          <button type='button' className='deleteButton' onClick={deleteValue}>Discard draft</button>
        </div>
      </form>
    </AskContainer>
  );
};

export default AskPage;