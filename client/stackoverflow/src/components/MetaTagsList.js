import styled from 'styled-components';

import Tag from './Tag';

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 1em;
`;

const MetaTagsList = () => {
  return (
    <ListContainer>
      <Tag></Tag>
    </ListContainer>
  );
};

export default MetaTagsList;
