import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import Tags from './Tags';
import Users from './Users';

const Detail = () => {
  return (
    <>
      <Container>
        <div>
      <div>
        <div>
          <h1>질문제목</h1>
          <button>질문하기</button>
        </div>
        <div>
          <span>질문 작성일</span>
          <span>질문 조회수</span>
        </div>
      </div>
      <div>
        <div>
          <button>업</button>
          <span>Vote</span>
          <button>다운</button>
        </div>
        <div>
          <p>질문 내용</p>
          <Tags />
          <div>
            <button>edit</button>
            <button>delete</button>
            <Users />
          </div>
          <div>(임시) 답변</div>
        </div>
      </div>
    </div>
      </Container>
    </>
  );
};

export default Detail;