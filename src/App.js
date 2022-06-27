import "./App.scss";
import { Container, Card, Row, Col } from "react-bootstrap";
import menuItems from "./constants/menuItems.json";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { connect } from "react-redux";
import { resetUserInfo } from "./store/actions/login.actions";
import { useState } from "react";
import { ConditionalModal } from "./components/Modal";

function App({ onLogout }) {
  let navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const logout = () => {
    onLogout();
  };
  return (
    <Container fluid className="project-zero-container">
      <Row className="nav">
        <Col className="links">
          <span className="project-title">Project Zero</span>
        </Col>

        <Col xs={1} className="profile-icon">
          <IoMdPerson size={30} />
        </Col>

        <Col
          xs={1}
          className="logout-icon"
          onClick={() => {
            setShowLogoutModal(true);
          }}
        >
          <MdLogout size={30} />
        </Col>
      </Row>
      <Row className="menu-tiles-container">
        {menuItems.map((item) => {
          return (
            <Card
              key={item.id}
              onClick={() => {
                item.active && navigate(item.navigation);
              }}
            >
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      <ConditionalModal
        show={showLogoutModal}
        handleClose={() => setShowLogoutModal(false)}
        headerBody={"Are you sure you want to logout?"}
        headerTitle={"Confirm Logout"}
        yesText={"Okay"}
        noText={"Cancel"}
        handleYes={() => {
          logout();
        }}
      />
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => {
    dispatch(resetUserInfo());
  },
});

export default connect(null, mapDispatchToProps)(App);
