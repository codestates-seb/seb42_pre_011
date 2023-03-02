import styled from 'styled-components';
import UserItem from './UserItem';

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`;

const UsersList = ({ usersList }) => {
  return usersList.length ? (
    <ListContainer>
      {usersList.map(ele => (
        <UserItem key={ele.memberId} ele={ele}></UserItem>
      ))}
    </ListContainer>
  ) : (
    'Loading...'
  );
};

export default UsersList;
