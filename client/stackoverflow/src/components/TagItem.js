import styled from 'styled-components';

import Tag from './Tag';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 3px;
  padding: 12px;

  .tag-name {
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    justify-content: space-between;
  }

  .tag-desc {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: hsl(210, 8%, 25%);
    margin-bottom: 12px;
  }

  .tag-count {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    margin-top: auto;
    color: hsl(210, 8%, 85%);
  }
`;

const TagItem = ({ ele }) => {
  return (
    <ItemContainer>
      <div className="tag-name">
        <Tag name={ele.tagName}></Tag>
      </div>
      <div className="tag-desc">{ele.tagContent}</div>
      <div className="tag-count">
        <span>123 questions</span>
      </div>
    </ItemContainer>
  );
};

export default TagItem;
