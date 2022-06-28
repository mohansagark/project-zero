import "./styles.scss";
import { connect } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { useCallback, useEffect } from "react";
import { googleClientId } from "../../config/config";
import jwtDecode from "jwt-decode";
import { setUserInfo } from "../../store/actions/login.actions";

const Login = (props) => {
  const { userInfo, setUserData } = props;

  const handleCallbackResponse = useCallback(
    (response) => {
      var userObject = jwtDecode(response.credential);
      setUserData(userObject);
      document.getElementById("signInDiv").hidden = true;
    },
    [setUserData]
  );

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: googleClientId,
      callback: handleCallbackResponse,
      auto_select: true,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    // google.accounts.id.prompt();
  }, [handleCallbackResponse]);

  console.log(userInfo);

  return (
    <Container fluid className="loginContainer">
      <Row>
        <Col>
          <div id="signInDiv" />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.login.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => {
    dispatch(setUserInfo(userData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
