import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: hsl(210, 8%, 97.5%);
  border-top: 3px solid hsl(27, 90%, 55%);
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const HeaderTopbarContainer = styled.div`
  width: 97rem;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 30px;
  background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27);
  background-position: 0 -500px;

  :hover {
    background-color: hsl(210, 8%, 90%);
  }
`;

const SearchContainer = styled.form`
  padding: 0 8px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: 100%;

  > div {
    flex-grow: 1;
  }

  input {
    background-color: hsl(0, 0%, 100%);
    color: hsl(210, 8%, 25%);
    width: 100%;
    padding: 0.6em 0.7em;
    padding-left: 32px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    font-size: 13px;
  }
`;

const NavContainer = styled.nav`
  height: 100%;
  padding-right: 12px;
  margin-left: auto;
  overflow-x: auto;
  display: flex;
  align-items: center;

  .login-btn {
    height: 32px;
    background-color: hsl(205, 46%, 92%);
    color: hsl(205, 47%, 42%);
    border-radius: 3px;
    border: 1px solid hsl(205, 41%, 63%);
    padding-left: 0.8em;
    padding-right: 0.8em;
    cursor: pointer;
    margin-left: 0.5em;
  }

  .login-btn:hover {
    background-color: hsl(205, 57%, 81%);
    color: hsl(205, 46%, 32%);
  }

  .signup-btn {
    height: 32px;
    background-color: hsl(206, 100%, 52%);
    color: hsl(0, 0%, 100%);
    border-radius: 3px;
    border: 1px solid transparent;
    padding-left: 0.8em;
    padding-right: 0.8em;
    cursor: pointer;
    margin-left: 0.5em;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  }

  .signup-btn:hover {
    background-color: hsl(206, 100%, 40%);
    color: hsl(0, 0%, 100%);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTopbarContainer>
        <Link to="/">
          <LogoContainer></LogoContainer>
        </Link>
        <SearchContainer>
          <div>
            <input placeholder="Search..."></input>
          </div>
        </SearchContainer>
        <NavContainer>
          <Link to="/login">
            <button className="login-btn">Log in</button>
          </Link>
          <Link to="signup">
            <button className="signup-btn">Sign up</button>
          </Link>
        </NavContainer>
      </HeaderTopbarContainer>
    </HeaderContainer>
  );
};

export default Header;
