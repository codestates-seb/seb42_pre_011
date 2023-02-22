import Container from '../components/Container';
import React, { useState } from "react";
import styled from "styled-components";
import {FcGoogle} from 'react-icons/fc';
import {VscGithub} from 'react-icons/vsc';
import {AiOutlineFacebook} from 'react-icons/ai';
import {BsStackOverflow} from 'react-icons/bs';
import {GoLinkExternal} from 'react-icons/go';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  margin-top: -280px;
`;

//로그인 폼 컨테이너
const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  padding-top: 30px;
  background-color: #ffffff;
  border-radius: 7px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
  width: 298px;
  height: 294px;
  margin-top: 650px;
`;

const Email = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-size: medium;
`;
// 포갓 패스워드 문구
const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Password = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  margin-top: 10px;
  font-size: medium;
  display: flex;
  justify-content: space-between;
`;

const ForgotPassword = styled.a`
  font-size: 0.8rem;
  color: #0a95ff;
  text-decoration: none;
  margin-bottom: 8px;
  margin-top: 10px;
  

`;

// 이메일 패스워드 인풋
const Input = styled.input`
  width: 250px;
  height: 33px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${({ hasError }) => (hasError ? "#ff4d4f" : "#e5e5e5")};
  border-radius: 4px;
  font-size: 16px;

  /* 에러메시지가 있을 때 */
  ${({ error }) => error && `
    border: 1px solid red;
  `}
`;

//로그인 버튼
const LoginButton = styled.button`
  width: 250px;
  height: 33px;
  margin-bottom: 20px;
  margin-top: 30px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ hasError }) => (hasError ? "#ff4d4f" : "#0a95ff")};
  color: #fff;
  font-size: 0.85rem;
  cursor: pointer;
`;

// google 버튼
const GoogleButton = styled(LoginButton)`
  position: absolute;
  top: 250px;
  width: 300px;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  color: #2E3337;
`;

// 구글 아이콘, 간격
const GoogleIconInterval = styled(FcGoogle)`
  margin-right: 5px;
`;
//스텍 오버플로우 아이콘
const StackoverflowIcon = styled(BsStackOverflow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 225px;
  font-size: 2.2rem;
`;

// 깃허브 버튼
const GithubButton = styled(LoginButton)`
  position: absolute;
  top: 300px;
  width: 300px;
  height: 38px;
  background-color: #2E3337;
  border: 1px solid #ccc;
`;

// 깃헙 아이콘, 간격
const GithubIconInterval = styled(VscGithub)`
  margin-right: 5px;
`;

// 페이스북 버튼
const FacebookButton = styled(LoginButton)`
  position: absolute;
  top: 350px;
  width: 300px;
  height: 38px;
  background-color: #385499;
  border: 1px solid #ccc;
`;

// 구글 아이콘, 간격
const FacebookIconInterval = styled(AiOutlineFacebook)`
  margin-right: 5px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: -10px;
  font-size: 14px;
`;

const SignUp = styled.p`
  display: block;
  text-align: center;
  margin-top: 50px;
  font-size: 14px;
  color: #2e3337;
`;

const SignUpLink = styled.p`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #2e3337;
  width: 300px;
  height: 38px;
`;

// 글자 파랗게
const BlueText = styled.span`
  color: #0a95ff;
`;


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 로직 구현
    if (email === "") {
      setEmailError("The email is not a valid email address.");
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Password is incorrect.");
    } else {
      setPasswordError("");
    }
    if (email !== "" && password !== "") {
      console.log("로그인 성공");
    }
  };

  return (
    <>
      <Container>
        <LoginContainer>
        <GoogleButton><GoogleIconInterval />Log in with Google</GoogleButton>
        <GithubButton><GithubIconInterval />Log in with Github</GithubButton>
        <FacebookButton><FacebookIconInterval />Log in with Facebook</FacebookButton>
        <LoginFormContainer>
        <form onSubmit={handleSubmit}>
          <Email>Email</Email>
          <Input
            type="text"
            placeholder=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            hasError={emailError !== ""}
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          <PasswordContainer>
            <Password>Password</Password>  
            <ForgotPassword>Forgot password?</ForgotPassword>
          </PasswordContainer>
            <Input
              type="password"
              placeholder=""
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              hasError={passwordError !== ""}
            />
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          <LoginButton type="submit">Log in</LoginButton>
        </form>
        <StackoverflowIcon/>
        <SignUp>Don’t have an account? <BlueText>Sign up</BlueText></SignUp>
        <SignUpLink>Are you an employer? <BlueText>Sign up on Talent&nbsp;<GoLinkExternal /></BlueText></SignUpLink>
        </LoginFormContainer>
      </LoginContainer>
    </Container>
    </>
  );
};

export default Login;

