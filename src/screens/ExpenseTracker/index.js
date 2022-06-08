import "./style.css";
import { connect } from "react-redux";

const ExpenseTracker = (props) => {
  // Expense name
  // Expense cost
  // Expense date
  // Submit button

  const {} = props;
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker);
