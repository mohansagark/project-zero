import "./styles.scss";
import { connect } from "react-redux";

const PasswordGenerator = () => {
  return (
    <div className="fluid-container passwordGeneratorContainer">
      <h1 className="text-center title">Password Generator</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordGenerator);
