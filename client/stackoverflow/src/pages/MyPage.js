import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import {MdCake} from 'react-icons/md';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {AiOutlineSchedule} from 'react-icons/ai';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {FaPen} from 'react-icons/fa';
import {FaStackExchange} from 'react-icons/fa';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  justify-content: center;
  position: relative;
  top: -40%;
  left: -1%;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProfileName = styled.p`
  font-size: 24px;
  margin: 0 0 10px 0;
  font-size: 2rem;
  font-weight: medium;
`;

const ProfileInfo = styled.p`
  font-size: 24px;
  margin: 0 0 10px 0;
  font-size: 1rem;
  font-weight: medium;
  color: #999;
`;

const StatsContainer = styled.div`
  position: relative;
  height: 100%;
`;

const StatsBox = styled.div`
  position: absolute;
  height: 300px;
  width: 190px;
  left: 160px;
  top: 40%;
  transform: translateY(-50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StatsText = styled.h2`
  position: absolute;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #555;
  top: -30px;
  left: 0px;
`;

const StastsAnswerNumber = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  font-size: 20px;
  margin-bottom: 10px; /* 아래 간격 */
`;

const StastsAnswerLabel = styled.div`
  font-size: 16px;
  margin: 0;
  margin-top: 0px; /* 위 간격 */
  margin-bottom: 50px; /* 아래 간격 */
`;

const StastsQuestionNumber = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  font-size: 20px;
  margin-bottom: 10px; /* 아래 간격 */
`;

const StastsQuestionLabel = styled.div`
  font-size: 16px;
  margin: 0;
  margin-top: 0px; /* 위 간격 */
  margin-bottom: 20px; /* 아래 간격 */
`;

const AnswerContainer = styled.div`
  position: relative;
  height: 100%;
`;

const AnswerBox = styled.div`
  position: absolute;
  height: 300px;
  width: 850px;
  left: 400px;
  top: 40%;
  transform: translateY(-50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnswerText = styled.h2`
  position: absolute;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #555;
  top: -30px;
  left: 0px;
`;

const AnswerLabel = styled.div`
  font-size: 16px;
  margin: 0;
  margin-top: 50px; /* 위 간격 */
  margin-bottom: 50px; /* 아래 간격 */
  text-align: center;
`;

// 글자 파랗게
const BlueText = styled.span`
  color: #0a95ff;
`;

const ProfileIconInterval = styled(HiOutlineUserCircle)`
  margin-right: 60px;
  font-size: 120px;
  font-weight: thin;
`;

const EditButton = styled.button`
  position: relative;
  top: 30px;
  right: -1240px;
  width: 150px;
  height: 35px;
  font-size: 13px;
  font-weight: lighter;
  color: #999;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #999;
  cursor: pointer;
`;

const StackButton = styled.button`
  position: relative;
  top: 30px;
  right: -1248px;
  width: 150px;
  height: 35px;
  font-size: 13px;
  font-weight: lighter;
  color: #999;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #999;
  cursor: pointer;
`;

const MyPage = () => {
  return (
    <>
      <Container>
        <EditButton><FaPen/>&nbsp;&nbsp;Edit profile</EditButton>
        <StackButton><FaStackExchange/>&nbsp;Network profile</StackButton>
        <StatsContainer>
        <StatsBox>
          <StatsText>Stats</StatsText>
          <StastsAnswerNumber>1</StastsAnswerNumber>
          <StastsAnswerLabel>answers</StastsAnswerLabel>
          <StastsQuestionNumber>3</StastsQuestionNumber>
          <StastsQuestionLabel>questions</StastsQuestionLabel>
        </StatsBox>
        </StatsContainer>
        <AnswerContainer>
          <AnswerBox>
            <AnswerText>Answer</AnswerText>
            <AnswerLabel>You have not <BlueText>answered</BlueText> any questions</AnswerLabel>
          </AnswerBox>
        </AnswerContainer>
          <Sidebar></Sidebar>
          <ProfileWrapper>
            <ProfileIconInterval><HiOutlineUserCircle/></ProfileIconInterval>
          <ProfileContent>
            <ProfileName>코드스테이츠</ProfileName>
            <ProfileInfo>
              <MdCake/>&nbsp;Member for 3 months&nbsp;&nbsp; 
              <AiOutlineClockCircle/>&nbsp;Last seen this week&nbsp;&nbsp; 
              <AiOutlineSchedule/>&nbsp;Visited 10 days, 4 consecutive&nbsp;&nbsp;
            </ProfileInfo>
           </ProfileContent>
         </ProfileWrapper>
      </Container>
    </>
  );
};

export default MyPage;
