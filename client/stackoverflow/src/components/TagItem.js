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

const TagItem = () => {
  return (
    <ItemContainer>
      <div className="tag-name">
        <Tag></Tag>
      </div>
      <div className="tag-desc">
        For questions about programming in ECMAScript (JavaScript/JS) and its
        different dialects/implementations (except for ActionScript). Keep in
        mind that JavaScript is NOT the same as Java! Include all labels that
        are relevant to your question; e.g., [node.js], [jQuery], [JSON],
        [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.
      </div>
      <div className="tag-count">
        <span>123 questions</span>
      </div>
    </ItemContainer>
  );
};

export default TagItem;
