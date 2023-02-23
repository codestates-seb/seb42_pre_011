import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import {
  InputLabel,
  EditorInput,
} from "../components/question/EditorInputWrapper";
import { Input } from "../components/question/Input";
import { Button } from "../components/question/Button";
import Tag from "../components/Tag";
import styled from "styled-components";

const Edit = () => {
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
          <EditorInput />
        </div>
        <div>
          <InputLabel title="Tags" />
          <Input placeholder="" padding="0.78rem 0.91rem" width="100%" />
          <Tag />
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
