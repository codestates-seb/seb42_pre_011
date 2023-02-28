import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import {
  InputLabel,
  EditorInput,
} from "../components/question/EditorInputWrapper";
import { Input } from "../components/question/Input";
import { Button } from "../components/question/Button";
import Tag from "../components/Tag";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";


const Edit = (props) => {
  // const isLogin = useSelector(state => state.loginStatus.status);
  const navigate = useNavigate();
  // const goLogin = () => {
  //   alert('로그인 후에 이용해주세요. 로그인 페이지로 이동합니다.');
  //   navigate('/users/login');
  // };

  const location = useLocation();
  const boardId = location.pathname.split('/')[2];
  // const [ title, setTitle ] = useState(location.state.title);
  // const [ tags, setTags ] = useState(location.state.tags);

  const editorRef= useRef();

const saveEditButtonClick = async () => {
  await axios({
    method: 'PATCH',
    url: 'https://4410-122-43-246-215.jp.ngrok.io/questions/24/9',
    data: {
      // title,
      questionContent: editorRef.current.getInstance().getHTML(),
      // tags,
    }
  })
  .then(res => {
    navigate(`/questions`);
  })
  .catch(err => {
    console.error(err);
  })
}

const cancelButtonClick = () => {
  navigate(`/questions`);
};

  return (
    <Container>
      <Sidebar></Sidebar>
      <MainLeft>
        <div>
          <InputLabel title="Title" />
          <Input placeholder="" padding="0.78rem 0.91rem" width="100%" />
        </div>
        <div>
          <InputLabel title="Body" />
          <EditorInput ref={editorRef} />
          <div>{props.questionContent}</div>
        </div>
        <div>
          <InputLabel title="Tags" />
          <Input placeholder="" padding="0.78rem 0.91rem" width="100%" />
          {/* <Tag /> */}
        </div>
        <div>
          <InputLabel title="Edit Summary" />
          <Input
            placeholder="briefly explain your changes (corrected spelling, fixed grammar, improved formatting)"
            padding="0.78rem 0.91rem"
            width="100%"
          />
        </div>
        <div className="buttonWrapper">
          <Button
          onClick={saveEditButtonClick}
            buttonType="type2"
            buttonName="Save edits"
            width="8.04rem"
            height="3.79rem"
          />
          <Button
          onClick={cancelButtonClick}
            buttonType="type4"
            buttonName="Cancel"
            width="8.04rem"
            height="3.79rem"
          />
        </div>
      </MainLeft>
    </Container>
  );
};

export default Edit;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: 2.4rem;
  margin-top: 1.8rem;

  .buttonWrapper {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    margin-top: 1.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

// const MainRight = styled.div`
//   padding-left: 2.4rem;
// `;
