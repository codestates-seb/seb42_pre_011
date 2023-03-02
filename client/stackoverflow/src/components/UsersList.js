import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`;

const UsersList = () => {
  return (
    <>
      <ListContainer></ListContainer>
    </>
  );
};

export default UsersList;
