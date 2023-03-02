import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { MainContainer } from './Questions';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import TagItem from '../components/TagItem';
import TagsList from '../components/TagsList';

const TagsMainContainer = styled(MainContainer)`
  width: calc(100% - 164px);

  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  p {
    max-width: calc(97rem / 12 * 6);
    font-size: 1rem;
    margin-bottom: 16px;
  }
`;

const TagsController = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    height: 100%;
    margin-bottom: 12px;
    padding: 0.6em 0.7em;
    padding-left: 32px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    color: hsl(210, 8%, 5%);
    font-size: 13px;
  }
`;

const SortController = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
  margin-left: auto;

  div {
    margin-right: -1px;
    margin-bottom: 1px;
    border: 1px solid hsl(210, 8%, 55%);
    color: hsl(210, 8%, 25%);
    font-size: 13px;
    padding: 0.8em;
    cursor: pointer;
    font-weight: normal;
  }

  .popular-btn {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .new-btn {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-right: 0;
  }

  div:hover {
    background-color: hsl(210, 8%, 97.5%);
    color: hsl(210, 8%, 35%);
  }
`;

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://3.39.174.236:8080/tags?page=1&size=100',
    }).then(res => setTags(res.data.data));
  }, []);

  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <TagsMainContainer>
          <h1>Tags</h1>
          <p>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
          <TagsController>
            <input placeholder="Filter by tag name"></input>
            <SortController>
              <div className="popular-btn">Popular</div>
              <div className="name-btn">Name</div>
              <div className="new-btn">New</div>
            </SortController>
          </TagsController>
          <TagsList tags={tags}></TagsList>
        </TagsMainContainer>
      </Container>
    </>
  );
};

export default Tags;
