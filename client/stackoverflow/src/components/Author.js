import styled from 'styled-components';

const AuthorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  gap: 4px;
`;

const AuthorInfo = styled.div`
  font-size: 12px;
  min-width: 0;
  overflow-wrap: break-word;
  margin: 2px;
  color: hsl(206, 100%, 40%);
  text-decoration: none;
  cursor: pointer;
`;

const UploadTime = styled.time`
  color: hsl(210, 8%, 45%);
  font-size: 12px;
`;

const Author = ({ name, createdAt }) => {
  return (
    <AuthorContainer>
      <AuthorInfo>{name}</AuthorInfo>
      <UploadTime>{createdAt}</UploadTime>
    </AuthorContainer>
  );
};

export default Author;
