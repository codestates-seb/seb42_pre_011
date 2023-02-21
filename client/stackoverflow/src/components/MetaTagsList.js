import styled from 'styled-components';

import MetaTagItem from './MetaTagItem';

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 1em;
`;

const MetaTagsList = () => {
  return (
    <ListContainer>
      <MetaTagItem></MetaTagItem>
    </ListContainer>
  );
};

export default MetaTagsList;
