import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import BackNavigation from "../../components/BackNavigation";
import './style.scss'



const ProfileComponent = ({ userInfo }) => {
  return (
    <Container fluid className="profile-container">
      <BackNavigation className="back-nav-media-queires" title={"My Profile"} />
      <Row className="profile-row">
        <Col lg={4} md={3}  />
        <Col lg={3} md={3} xs={12}>
          <img
            src={userInfo.picture}
            className="profile-img"
            alt="User Profile"
          />
        </Col>
        <Col lg={3} md={3} xs={12} className="data-media-queries">
          <h3>{userInfo.name}</h3>
          <h3>{userInfo.email}</h3>
          <h3>{userInfo.family_name}</h3>
          <h3>{userInfo.given_name}</h3>
        </Col>
        <Col lg={2} md={3}  />
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.login.userInfo,
  };
};

export default connect(mapStateToProps, null)(ProfileComponent);
