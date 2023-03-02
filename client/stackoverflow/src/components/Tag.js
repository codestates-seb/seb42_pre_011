import styled from 'styled-components';

const ItemContainer = styled.li`
  font-size: 12px;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  margin: 2px 4px 2px 0;
  padding: 0.4em 0.5em;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 3px;
  list-style: none;
  cursor: pointer;

  :hover {
    color: hsl(205, 46%, 32%);
    background-color: hsl(205, 53%, 88%);
  }
`;

const Tag = ({ name }) => {
  return (
    <>
      <ItemContainer>{name}</ItemContainer>
    </>
  );
};

export default Tag;
