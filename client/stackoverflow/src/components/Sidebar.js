import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.aside`
  width: 164px;
  height: 100%;
`;

const SidebarStickyContainer = styled.div`
  width: auto;
  position: sticky;
  top: 50px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;

  a {
    font-weight: bold;
    background-color: hsl(210, 8%, 95%);
    color: hsl(210, 8%, 5%);
    border-right: 3px solid hsl(27, 90%, 55%);
    padding: 4px;
    padding-left: 8px;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarStickyContainer>
        <Link to="/">
          <div className="home-link">Home</div>
        </Link>
        <Link to="/questions">
          <div className="questions-link">Questions</div>
        </Link>
        <Link to="/tags">
          <div className="tags-link">Tags</div>
        </Link>
        <Link to="/users">
          <div className="users-link">Users</div>
        </Link>
        {// 질문상세 테스트용
        }
        <Link to="/Detail">
        <div className="users-link">Detail</div>
      </Link>
      {// 여기까지}
      }
      </SidebarStickyContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
