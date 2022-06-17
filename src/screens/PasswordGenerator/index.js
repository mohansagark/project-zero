import "./styles.scss";
import { connect } from "react-redux";
import CheckBox from "../../components/Checkbox";
import { useRef, useState } from "react";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import BackNavigation from "../../components/BackNavigation";
import { Col, Container, Row } from "react-bootstrap";
import { copyToClipBoard } from "../../helpers/general";
import { ConditionalModal, CustomModal, InformationModal } from "../../components/Modal";

const PasswordGenerator = ({ availableRules }) => {
  const [selectedRules, setSelectedRules] = useState([]);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("show model...");
    setShow(true);
  };

  const cardRef = useRef(null);

  const onToggle = (selectedRule) => {
    let elementExists = selectedRules.find(
      (rule) => rule.id === selectedRule.id
    );
    let temp = [...selectedRules];
    if (elementExists) {
      var index = temp.findIndex(function (o) {
        return o.id === elementExists.id;
      });
      if (index !== -1) {
        temp.splice(index, 1);
      }
    } else {
      temp.push(selectedRule);
    }
    setSelectedRules(temp);
  };

  const generatePassword = () => {
    if (passwordLength > 0 && selectedRules.length > 0) {
      let pwd = "";
      let chars = "";
      selectedRules.forEach((rule) => (chars += rule.value));
      for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        pwd += chars.substring(randomNumber, randomNumber + 1);
      }
      setPassword(pwd);
    } else {
      toast.error(
        passwordLength.length === 0
          ? "Provide a suitable password length"
          : "Select atleast 1 category"
      );
    }
  };

  const savePasswordForm = () => {
    return <div>Hello</div>;
  };

  return (
    <Container fluid className="passwordGeneratorContainer">
      <BackNavigation title={"Password Generator"} />
      <Row className="cards-content">
        <Col xs={4} className="card" ref={cardRef}>
          <Row className="row">
            <Col>
              <Row className="alignCenter">
                <Col className="form-group">
                  <label>Password Length</label>
                </Col>
                <Col className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(e.target.value)}
                    maxLength={2}
                  />
                </Col>
              </Row>
              {availableRules.map((rule, index) => {
                return (
                  <CheckBox
                    key={String(index)}
                    title={rule.title}
                    onCheck={() => onToggle(rule)}
                    checked={selectedRules.find(
                      (check) => check.id === rule.id
                    )}
                  />
                );
              })}

              <Button
                title="Generate Password"
                clickMethod={generatePassword}
              />
            </Col>
          </Row>
        </Col>
        <Col
          xs={4}
          className="card view-password"
          style={{ height: cardRef.current?.clientHeight }}
        >
          <Row className="password">{password}</Row>
          <Row className="buttons">
            <Button
              title="Copy to clipboard"
              clickMethod={() => copyToClipBoard(password, "Password")}
            />
            <Button title="Save Password" clickMethod={() => handleShow()} />
            <ConditionalModal
              show={show}
              handleClose={handleClose}
              innerCompoenent={savePasswordForm}
              headerTitle={'Infomation'}

            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    availableRules: state.passwordGenerator.availableRules,
  };
};

export default connect(mapStateToProps, null)(PasswordGenerator);
