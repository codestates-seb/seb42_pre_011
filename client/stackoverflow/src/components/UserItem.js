import styled from 'styled-components';

const ItemContainer = styled.div`
  overflow: hidden;
  padding: 5px 6px 7px 7px;
  color: hsl(210, 8%, 45%);

  .user-avatar {
    float: left;
    width: 48px;
    height: 48px;
  }

  .user-detail {
    margin-left: 9px;
    width: calc(100% - 64px);
    float: left;
  }

  .user-name {
    font-size: 1.1rem;
    color: hsl(206, 100%, 40%);
    cursor: pointer;
  }

  .user-email {
    font-size: 12px;
    margin-bottom: 2px;
  }
`;

const UserItem = ({ ele }) => {
  return (
    <ItemContainer>
      <div className="user-avatar"></div>
      <div className="user-detail">
        <div className="user-name">{ele.name}</div>
        <div className="user-email">{ele.email}</div>
      </div>
    </ItemContainer>
  );
};

export default UserItem;
