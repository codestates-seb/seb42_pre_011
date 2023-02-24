import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const EditorContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 8px;

  > h2 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1em;
    padding-top: 20px;
  }
`;

const PostBtnWrapper = styled.div`
  padding: 10px 0 15px 0;
  display: flex;
`;

const PostBtn = styled.button`
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  font-size: 13px;
  padding: 0.8em;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

const AnswerEditor = () => {
  return (
    <EditorContainer>
      <h2>Your Answer</h2>
      <Editor
        height="400px"
        initialEditType="markdown"
        initialValue="Write your answer"
        previewStyle="vertical"
        useCommandShortcut={true}></Editor>
      <PostBtnWrapper>
        <PostBtn>Post Your Answer</PostBtn>
      </PostBtnWrapper>
    </EditorContainer>
  );
};

export default AnswerEditor;
