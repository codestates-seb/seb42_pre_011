import styled from 'styled-components';

const AskButton = styled.div`
  margin-bottom: 12px;

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

  a:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

export default AskButton;
