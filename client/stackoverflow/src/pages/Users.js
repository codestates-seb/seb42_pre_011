import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import UsersList from '../components/UsersList';
import { MainContainer } from './Questions';

const UsersMainContainer = styled(MainContainer)`
  width: calc(100% - 164px);

  h1 {
    font-size: 2rem;
    margin-bottom: 24px;
  }

  p {
    max-width: calc(97rem / 12 * 6);
    font-size: 1rem;
    margin-bottom: 16px;
  }
`;

const UsersController = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  input {
    margin-bottom: 12px;
    height: 100%;
    max-width: calc(97rem * 36);
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    color: hsl(210, 8%, 5%);
    font-size: 13px;
    padding: 0.6em 0.7em 0.6em 32px;
  }
`;

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://3.39.174.236:8080/members?page=1&size=100`,
    }).then(res => setUsersList(res.data.data));
  }, []);

  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <UsersMainContainer>
          <h1>Users</h1>
          <UsersController>
            <input placeholder="Filter by user"></input>
          </UsersController>
          <UsersList usersList={usersList}></UsersList>
        </UsersMainContainer>
      </Container>
    </>
  );
};

export default Users;
