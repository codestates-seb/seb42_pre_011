import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import {FaPen} from 'react-icons/fa';
import {FaStackExchange} from 'react-icons/fa';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {MdCake} from 'react-icons/md';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {AiOutlineSchedule} from 'react-icons/ai';


const MainContainer = styled.div`
  /* border: 1px solid gray; */
  height: 850px;
  width: 1085px;
  padding: 0px;
  display: flex;
`;
const Topcontainer = styled.div`
  /* border: 1px solid gray; */
  height: 400px;
  width: 1085px;
  padding: 0px;
  display: flex;
`;

const Profilecontainer = styled.div`
  /* border: 1px solid gray; */
  height: 200px;
  width: 780px;
  padding: 20px;
  display: flex;
  margin-right: auto;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImagecontainer = styled.div`
  /* border: 1px solid gray; */
  height: 150px;
  width: 200px;
  padding: 0px;
  display: flex;
  margin-right: auto;
`;

const ProfileIcon = styled(HiOutlineUserCircle)`
  font-size: 120px;
  margin-left: 20px;
`;

const ProfileContentcontainer = styled.div`
  //border: 1px solid gray;
  height: 200px;
  width: 700px;
  padding:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileName = styled.p`
  margin: 0 0 10px 0;
  font-size: 2rem;
  font-weight: medium;
`;

const ProfileInfo = styled.p`
  margin: 0 0 10px 0;
  font-size: 0.9rem;
  font-weight: medium;
  color: #999;
`;

const Editcontainer = styled.div`
  //border: 1px solid gray;
  height: 50px;
  width: 300px;
  padding: 20px;
  display: flex;
  margin-left: auto;
`;

const EditButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: bottom;
  color: #666;
`;

const EditButton = styled.div`
  height: 35px;
  width: 115px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 4px;
  border-color: #9EA6AD;
  border: 1px solid #BBBFC5;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NetworkButton = styled.div`
  height: 35px;
  width: 135px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #BBBFC5;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bodycontainer = styled.div`
  //border: 1px solid gray;
  height: 400px;
  width: 1085px;
  padding: 0px;
  display: flex;
  margin-top: 300px;
  margin-left: -1085px;
`;

const Statscontainer = styled.div`
  border: 1px solid #BBBFC5;
  border-radius: 7px;
  height: 350px;
  width: 190px;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  justify-content: center;
`;

const StatsText = styled.h2`
  position: relative;
  font-size: 1.2rem;
  text-align: center;
  color: #555;
  top: -105px;
  left: 0px;
  display: flex;
`;

const StastsAnswerNumber = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  font-size: 20px;
  margin-bottom: 10px; 
  margin-left: 20px;
`;

const StastsAnswerLabel = styled.div`
  font-size: 16px;
  margin: 0;
  margin-top: 0px; 
  margin-bottom: 50px;
  margin-left: 20px; 
`;

const StastsQuestionNumber = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  font-size: 20px;
  margin-bottom: 10px; 
  margin-left: 20px;
`;

const StastsQuestionLabel = styled.div`
  font-size: 16px;
  margin: 0;
  margin-top: 0px; 
  margin-bottom: 20px; 
  margin-left: 20px;
`;

const Answercontainer = styled.div`
  border: 1px solid #BBBFC5;
  border-radius: 7px;
  height: 350px;
  width: 820px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerText = styled.h2`
  position: relative;
  font-size: 1.2rem;
  text-align: center;
  color: #555;
  top: -195px;
  left: -250px;
  display: flex;
`;

const AnswerLabel = styled.div`
  font-size: 16px;
  margin: 0;
  margin-top: 50px; 
  margin-bottom: 50px; 
  text-align: center;
`;

// 글자 파랗게
const BlueText = styled.span`
  color: #0a95ff;
`;

const MyPage = () => {
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <MainContainer>
          <Topcontainer> 
            <Profilecontainer>
            <ProfileImagecontainer>
              <ProfileIcon>
                <HiOutlineUserCircle/>
              </ProfileIcon>
            </ProfileImagecontainer>
            <ProfileContentcontainer>
              <ProfileName>코드스테이츠</ProfileName>
              <ProfileInfo>
              <MdCake/>&nbsp;Member for 3 months&nbsp;&nbsp; 
              <AiOutlineClockCircle/>&nbsp;Last seen this week&nbsp;&nbsp; 
              <AiOutlineSchedule/>&nbsp;Visited 10 days, 4 consecutive&nbsp;&nbsp;
            </ProfileInfo>
            </ProfileContentcontainer>
            <ProfileName></ProfileName>
            </Profilecontainer>
            <Editcontainer>
            <EditButtonContainer>
                <EditButton><FaPen/>&nbsp;&nbsp;Edit profile</EditButton>
                <NetworkButton><FaStackExchange/>&nbsp;Network profile</NetworkButton>
              </EditButtonContainer>
            </Editcontainer>
          </Topcontainer> 
          <Bodycontainer>
            <Statscontainer>
              <StatsText>Stats</StatsText>
              <StastsAnswerNumber>1</StastsAnswerNumber>
              <StastsAnswerLabel>answers</StastsAnswerLabel>
              <StastsQuestionNumber>3</StastsQuestionNumber>
              <StastsQuestionLabel>questions</StastsQuestionLabel>
            </Statscontainer>
            <Answercontainer>
              <AnswerText>Answer</AnswerText>
              <AnswerLabel>You have not <BlueText>answered</BlueText> any questions</AnswerLabel>
            </Answercontainer>
          </Bodycontainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default MyPage;

