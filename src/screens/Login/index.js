import "./styles.scss";
import { connect } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { googleClientId } from "../../config/config";
import jwtDecode from "jwt-decode";

const Login = (props) => {
  const handleCallbackResponse = (response) => {
    var userObject = jwtDecode(response.credential);
    console.log(userObject, "google user");
  };
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

    google.accounts.id.prompt();
  }, []);
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
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
