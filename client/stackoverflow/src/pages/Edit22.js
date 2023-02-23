import styled from "styled-components";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import { Input } from "../components/question/Input";
import { Button } from "../components/question/Button";
import {
  InputLabel,
  EditorInput,
} from "../components/question/EditorInputWrapper";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = styled.div`
  display: flex;
`;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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

const MainRight = styled.div`
  padding-left: 2.4rem;
`;

const Edit = () => {
  // const location = useLocation();
  // const answerBoardId = location.pathname.split('/')[2];
  // const questionBoardId = location.state.questionBoardId;

  return (
    <>
      <Container>
        <MainLeft>
          <div>
            <div>Typing the store inside the component</div>
            <div>
              How can I type the defined store inside a component? I'm getting
              the error in this template's line: saying "Property 'storeForm'
              does not exist on type". So I assume I'd need to type the defined
              store in the code? The store is simple - just a string for the
              firstName and LastName.
            </div>
          </div>
          {/* <div>
            <InputLabel title="answer" />
            <EditorInput ref={editorRef} />
          </div>
          <div>
            <InputLabel title="Edit Summary" />
            <Input
              placeholder="briefly explain your changes (corrected spelling, fixed grammar, improved formatting)"
              padding="0.78rem 0.91rem"
              width="100%"
            />
          </div> */}
          <div className="buttonWrapper">
            <Button
              buttonType="type2"
              buttonName="Save edits"
              width="8.04rem"
              height="3.79rem"
            />
            <Button
              buttonType="type4"
              buttonName="Cancel"
              width="8.04rem"
              height="3.79rem"
            />
          </div>
        </MainLeft>
        <MainRight></MainRight>
        <Sidebar></Sidebar>
        <div>edit page</div>;
      </Container>
    </>
  );
};

export default Edit;
