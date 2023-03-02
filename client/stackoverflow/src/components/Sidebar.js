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
    display: flex;
    padding: 8px 6px 8px 8px;
    color: hsl(210, 8%, 35%);
    line-height: 2;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;
  }

  a:active {
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

  svg {
    width: 18px;
    height: 18px;
    margin-top: -1px;
    margin-right: 4px;
    color: hsl(210, 8%, 55%);
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
          <svg>
            <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8ZM8 15.32a6.46 6.46 0 0 1-4.3-2.74 6.46 6.46 0 0 1-.93-5.01L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52Zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.45 6.45 0 0 1 3.83 4.51 6.45 6.45 0 0 1-1.51 5.73v.01Z"></path>
          </svg>
          <div className="questions-link">Questions</div>
        </Link>
        <Link to="/tags">
          <div className="tags-link">Tags</div>
        </Link>
        <Link to="/users">
          <div className="users-link">Users</div>
        </Link>
      </SidebarStickyContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
