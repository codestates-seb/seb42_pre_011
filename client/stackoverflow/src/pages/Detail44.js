import { Link } from "react-router-dom";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

export const HeadContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  flex-wrap: wrap;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 12px;
    margin-right: 12px;
    flex: 1 auto;
  }

  div {
    margin-bottom: 12px;
  }

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
`;

const Content = styled.div`
  .detail__header {
    padding-bottom: 13px;
    border-bottom: 1px solid #e6e9ea;
  }
  .detail__header--top {
    display: flex;
    justify-content: space-between;
  }
  .detail__title {
    margin-bottom: 15px;
    color: #3b4045;
    font-weight: 500;
    font-size: 2.07rem;
    line-height: 1.3;
  }
  .question__vote {
    display: flex;
    gap: 8px;
    button {
      height: fit-content;
      padding: 4px 8px;
      border-radius: 3px;
      cursor: pointer;
    }
  }
  .detail__body {
    margin-top: 20px;
    line-height: 1.4rem;
    font-size: 13px;
  }
`;
const Dates = styled.div`
  display: flex;
  gap: 20px;
  color: #939596;
  span {
    color: #3b4045;
    display: inline-block;
    margin-left: 4px;
  }
  @media screen and (max-width: 1200px) {
    gap: 8px;
    flex-direction: column;
  }
`;
const Center = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 20px;
`;

const Clicks = styled.div`
  div {
    display: flex;
    padding: 16px 0px;
    gap: 4px;
  }
  button {
    border-radius: 3px;
    cursor: pointer;
  }
  .hide {
    display: none !important;
  }
`;

const Detail = () => {
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <div className="board_details">
          <article>
            <Content>
              <div className="detail__header">
                <div className="detail__header--top">
                  <h2 className="detail__title">
                    React Contact form get 404 not found
                  </h2>
                  <HeadContainer>
                    <div>
                      <Link to="/ask">Ask Question</Link>
                    </div>
                  </HeadContainer>
                </div>
                <Dates>
                  <div>
                    Asked
                    <span></span>
                  </div>
                  <div>
                    Modified
                    <span></span>
                  </div>
                  <div>
                    Viewed<span></span>
                  </div>
                  <span></span> rating
                </Dates>
              </div>
              <div className="detail__body"></div>
            </Content>
          </article>
          <Center>
            <div className="question__vote">
              <button type="button" className="btn-style1" name="upratings">
                추천
              </button>
              <button type="button" className="btn-style2" name="downratings">
                비추천
              </button>
            </div>
            <div className="main">
              Right now, I'm making a portfolio website, everything works as it
              is supposed to in my machine, but when I deploy it to the live
              serve, in dies. When I submit the contact form and refresh the
              page, it says GET 404 - NOT FOUND in the browser console. The
              thing is, the url stays the same but as soon as it refreshes dies.
              Even tho that url path DOES exist. I'm using emailjs. Here is the
              code
            </div>
          </Center>
          <Clicks>
            <div className="detail__buttoncontainer">
              Rafael Oliva
              <button type="button" className="btn-style2">
                Edit
              </button>
              <button type="button" className="btn-style2">
                Delete
              </button>
            </div>
          </Clicks>
        </div>
      </Container>
    </>
  );
};

export default Detail;
