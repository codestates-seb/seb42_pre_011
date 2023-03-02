import styled from 'styled-components';

const VoteBarContainer = styled.div`
  width: auto;
  padding-right: 16px;
  vertical-align: top;
  grid-column: 1;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    color: hsl(210, 8%, 75%);
    margin: -2px;
  }
`;

const VoteButton = styled.button`
  margin: 2px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  svg {
    width: 36px;
    height: 36px;
  }
`;

const VoteCount = styled.div`
  margin: 2px;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: hsl(210, 8%, 45%);
`;

const VoteUpButton = styled(VoteButton)``;

const VoteDownButton = styled(VoteButton)``;

const VoteBar = ({ total }) => {
  return (
    <VoteBarContainer>
      <div>
        <VoteUpButton>
          <svg>
            <path d="M2 25h32L18 9 2 25Z"></path>
          </svg>
        </VoteUpButton>
        <VoteCount>{`${total}`}</VoteCount>
        <VoteDownButton>
          <svg>
            <path d="M2 11h32L18 27 2 11Z"></path>
          </svg>
        </VoteDownButton>
      </div>
    </VoteBarContainer>
  );
};

export default VoteBar;
