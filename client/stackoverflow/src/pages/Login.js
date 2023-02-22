import { useCallback } from "react";
import Container from "../components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onDontHaveAnAccountSignUpClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onLogInToggleClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  return (
    <Container>
      <div className="log-in">
      <div className="login-form">
        <img
          className="bxlink-external-icon"
          alt=""
          src="../bxlinkexternal.svg"
        />
        <img className="group-icon" alt="" src="../group.svg" />
        <div
          className="dont-have-an-account-sign-up"
          onClick={onDontHaveAnAccountSignUpClick}
        >
          <div className="dont-have-an-container">
            <span>{`Don’t have an account? `}</span>
            <span className="sign-up">Sign up</span>
          </div>
        </div>
        <div className="are-you-an-container">
          <span>{`Are you an employer? `}</span>
          <span className="sign-up">Sign up on Talent</span>
        </div>
        <div className="component-2">
          <div className="component-2-child" />
          <div className="password">Password</div>
          <div className="forgot-password">Forgot password?</div>
          <div className="log-in1">Log in</div>
          <div className="component-5">
            <div className="email">Email</div>
            <div className="textarea">
              <div className="textarea-child" />
            </div>
          </div>
          <div className="textarea1">
            <div className="textarea-child" />
          </div>
          <div className="log-in-toggle" onClick={onLogInToggleClick}>
            <div className="rectangle-parent">
              <div className="group-child" />
              <div className="log-in2"></div>
            </div>
          </div>
          <div className="google-join-button">
            <div className="textarea-child" />
            <img className="google-icon" alt="" src="../google-icon.svg" />
            <div className="log-in-with">Log in with Google</div>
          </div>
          <div className="github-join-button">
            <div className="github-join-button-child" />
            <div className="log-in-with1">Log in with GitHub</div>
            <img className="google-icon" alt="" src="../github-icon.svg" />
          </div>
          <div className="facebook-join-button">
            <div className="facebook-join-button-child" />
            <div className="log-in-with1">Log in with Facebook</div>
            <img className="facebook-icon" alt="" src="../facebook-icon.svg" />
          </div>
          <Form.Group className="inputstandard-formgroup">
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="inputstandard-formgroup1">
            <Form.Control type="password" />
          </Form.Group>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Login;
