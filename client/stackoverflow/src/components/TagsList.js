import styled from 'styled-components';

import TagItem from './TagItem';

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`;

const TagsList = ({ tags }) => {
  return tags.length ? (
    <ListContainer>
      {tags.map(ele => (
        <TagItem key={ele.tagId} ele={ele}></TagItem>
      ))}
    </ListContainer>
  ) : (
    'Loading...'
  );
};

export default TagsList;
