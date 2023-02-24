import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineFacebook } from 'react-icons/ai';

const Signup = () => {
  // sign up폼
  const Rectangle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 316px;
    height: 585px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
    border-radius: 7px;
  `;

  const Item = styled.div`
    width: 80%;
    font-size: 3rem;
    font-weight: semi bold;
    color: #333;
    text-align: center;
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  `;
  //전체 컨데이너
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  `;

  const Label = styled.label`
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: -10px;
  `;
  // 인풋창
  const Input = styled.input`
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  `;

  const Button = styled.button`
    font-size: 0.85rem;
    margin-top: 5px;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: #0a95ff;
    color: #fff;
    border: none;
    cursor: pointer;
  `;

  const Message = styled.p`
    font-size: 0.8rem;
    color: #999;
    text-align: left;
    margin-top: 10px;
  `;

  const NewMessage = styled(Message)`
    font-size: 0.8rem;
  `;
  // 글자 파랗게
  const BlueText = styled.span`
    color: #0a95ff;
  `;
  // 구글 아이콘 간격
  const GoogleIconInterval = styled(FcGoogle)`
    margin-right: 5px;
  `;
  // 구글 버튼 컨테이너
  const GoogleButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  `;
  // 구글 버튼
  const GoogleButton = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 316px;
    height: 38px;
    background-color: #ffffff;
    color: #000;
    font-size: 0.85rem;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    margin-top: -10px;
    top: -150px;
    border: 1px solid #ccc;
    cursor: pointer;
  `;
  // 깃허브
  const GithubIconInterval = styled(VscGithub)`
    margin-right: 5px;
  `;

  const GithubButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  `;

  const GithubButton = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 316px;
    height: 38px;
    background-color: #2e3337;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    margin-top: -10px;
    top: -100px;
    border: 1px solid #ccc;
    cursor: pointer;
  `;
  //페이스북
  const FacebookIconInterval = styled(AiOutlineFacebook)`
    margin-right: 5px;
  `;

  const FacebookButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -200px;
  `;

  const FacebookButton = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 316px;
    height: 38px;
    background-color: #385499;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    margin-top: -10px;
    top: -50px;
    border: 1px solid #ccc;
    cursor: pointer;
  `;

  //스택오버플로우 문구

  const StackOverflow = styled.div`
    margin: 0;
    font-size: 0.8rem;
    text-align: left;
    line-height: 1.4;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 0 50px 0 0;
    padding: 20px 0;
  `;

  const TextContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100vh;
  `;

  const JoinCommunity = styled.div`
    margin-bottom: 20px;
    font-size: 2rem;
  `;

  const GetUnstuck = styled.div`
    margin-bottom: 20px;
    font-size: 1rem;
  `;

  const UnlockPrivileges = styled.div`
    margin-bottom: 20px;
    font-size: 1rem;
  `;

  const SaveFavorites = styled.div`
    margin-bottom: 20px;
    font-size: 1rem;
  `;

  const EarnReputation = styled.div`
    margin-bottom: 20px;
    font-size: 1rem;
  `;

  const Collaborate = styled.div`
    margin-bottom: 0px;
    font-size: 0.8rem;
    color: #818890;
  `;

  const StackOverflowCTA = styled.div`
    margin-bottom: 5px;
    font-size: 0.8rem;
    color: #818890;
  `;

  return (
    <>
      <Container>
        <TextContainer>
          <StackOverflow>
            <JoinCommunity>Join the Stack Overflow community</JoinCommunity>
            <GetUnstuck>Get unstuck — ask a question</GetUnstuck>
            <UnlockPrivileges>
              Unlock new privileges like voting and commenting
            </UnlockPrivileges>
            <SaveFavorites>
              Save your favorite tags, filters, and jobs
            </SaveFavorites>
            <EarnReputation>Earn reputation and badges</EarnReputation>
            <Collaborate>
              Collaborate and share knowledge with a private group for FREE.
            </Collaborate>
            <StackOverflowCTA>
              <BlueText>
                Get Stack Overflow for Teams free for up to 50 users
              </BlueText>
              .
            </StackOverflowCTA>
          </StackOverflow>
        </TextContainer>
        <Rectangle>
          <GoogleButtonContainer>
            <GoogleButton>
              <GoogleIconInterval>
                <FcGoogle />
              </GoogleIconInterval>{' '}
              Sign up with Google{' '}
            </GoogleButton>
          </GoogleButtonContainer>
          <GithubButtonContainer>
            <GithubButton>
              <GithubIconInterval>
                <VscGithub />
              </GithubIconInterval>{' '}
              Sign up with Ggithub{' '}
            </GithubButton>
          </GithubButtonContainer>
          <FacebookButtonContainer>
            <FacebookButton>
              <FacebookIconInterval>
                <AiOutlineFacebook />
              </FacebookIconInterval>{' '}
              Sign up with Facebook{' '}
            </FacebookButton>
          </FacebookButtonContainer>
          <Item>
            <Form>
              <Label>Display name</Label>
              <Input type="text" />
              <Label>Email</Label>
              <Input type="email" />
              <Label>Password</Label>
              <Input type="password" />
              <Message>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </Message>
              <Button>Sign up</Button>
              <NewMessage>
                By clicking “Sign up”, you agree to our{' '}
                <BlueText>terms of service</BlueText>,{' '}
                <BlueText>privacy policy</BlueText> and{' '}
                <BlueText>cookie policy</BlueText>
              </NewMessage>
            </Form>
          </Item>
        </Rectangle>
      </Container>
    </>
  );
};

export default Signup;
