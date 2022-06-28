import "./App.scss";
import { Container, Card, Row, Col } from "react-bootstrap";
import menuItems from "./constants/menuItems.json";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { MdLogout } from "react-icons/md";

function App() {
  let navigate = useNavigate();
  return (
    <Container fluid className="project-zero-container">
      <Row className="nav">
        <Col xs={9} sm={9} md={9} className="links">
          <span className="project-title">Project Zero</span>
        </Col>

        <Col xs={2} sm={2} md={2} className="profile-icon">
          <IoMdPerson size={30} />
        </Col>

        <Col xs={1} sm={1} md={1} className="logout-icon">
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
    </Container>
  );
}

export default App;
