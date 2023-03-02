import styled from 'styled-components';
import UserItem from './UserItem';

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`;

const UsersList = ({ usersList }) => {
  return (
    <>
      <ListContainer>
        {usersList.map(ele => (
          <UserItem key={ele.memberId} ele={ele}></UserItem>
        ))}
      </ListContainer>
    </>
  );
};

export default UsersList;
