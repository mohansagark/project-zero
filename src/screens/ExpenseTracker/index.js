import "./styles.css";
import { connect } from "react-redux";

const ExpenseTracker = (props) => {
  // Expense name
  // Expense cost
  // Expense date
  // Submit button

  const {} = props;
  return (
    <div className="fluid-container">
      <h1 className="text-center">Expense Tracker</h1>
      <div className="row">
        <div className="col-md-3">
          <label>Expense Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label>Expense Cost</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label>Expense Date</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label></label>
          <button type="submit" className="btn btn-md btn-primary btn-submit">
            Add List
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker);
