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
      <h1 className="text-center title">Expense Tracker</h1>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-2 form-group">
              <label>Expense Name</label>
            </div>
            <div className="col-md-5 form-group">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3" />
          </div>

          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-2 form-group">
              <label>Expense Cost</label>
            </div>
            <div className="col-md-5 form-group">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3" />
          </div>

          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-2 form-group">
              <label>Expense Date</label>
            </div>
            <div className="col-md-5 form-group">
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3" />
          </div>

          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <button type="submit" className="btn btn-md btn-primary">Submit</button>
            </div>
            <div className="col-md-2">

              <a href="viewExpenses" className="view-anchorTag">View Expense</a>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker);
