import "./styles.scss";
import { connect } from "react-redux";
import CheckBox from "../../components/Checkbox";
import { useRef, useState } from "react";
import Button from "../../components/Button";
import { toast } from "react-toastify";

const PasswordGenerator = ({ availableRules }) => {
  const [selectedRules, setSelectedRules] = useState([]);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("");
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

  return (
    <div className="fluid-container passwordGeneratorContainer">
      <h1 className="text-center title">Password Generator</h1>
      <div className="row justify-content-center">
        <div className="col-md-1" />
        <div className="col-md-4 card" ref={cardRef}>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="row alignCenter">
                <div className="col-md-9 form-group">
                  <label>Password Length</label>
                </div>
                <div className="col-md-3 form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(e.target.value)}
                    maxLength={2}
                  />
                </div>
              </div>
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
            </div>
            <div className="col-md-2" />
          </div>
        </div>
        <div className="col-md-2" />
        <div
          className="col-md-4 card view-password"
          style={{ height: cardRef.current?.clientHeight }}
        >
          <span>{password}</span>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    availableRules: state.passwordGenerator.availableRules,
  };
};

export default connect(mapStateToProps, null)(PasswordGenerator);
