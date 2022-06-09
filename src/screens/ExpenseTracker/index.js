import "./styles.css";
import { connect } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { validateAlphabets, validateCurrency } from "../../helpers/general";

const ExpenseTracker = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState("");

  const notify = () => {
    if (name && amount && date) {
      toast.success("X is added to the Expense List!");
    }
  };
  const handleName = (e) => {
    if (validateAlphabets(e)) {
      setName(e);
    }
  };
  const handleAmount = (e) => {
    if (validateCurrency(e)) {
      setAmount(e);
    }
  };
  const {} = props;
  return (
    <div className="fluid-container">
      <h1 className="text-center title">Expense Tracker</h1>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row alignCenter">
            <div className="col-md-2" />
            <div className="col-md-2 form-group ">
              <label>Expense Name</label>
            </div>
            <div className="col-md-5 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Expense Name"
                value={name}
                onChange={(e) => handleName(e.target.value)}
              />
            </div>
            <div className="col-md-3" />
          </div>

          <div className="row alignCenter">
            <div className="col-md-2" />
            <div className="col-md-2 form-group">
              <label>Expense Cost</label>
            </div>
            <div className="col-md-5 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Expense Cost"
                value={amount}
                onChange={(e) => validateCurrency(e.target.value)}
              />
            </div>
            <div className="col-md-3" />
          </div>

          <div className="row alignCenter">
            <div className="col-md-2" />
            <div className="col-md-2 form-group">
              <label>Expense Date</label>
            </div>
            <div className="col-md-5 form-group date">
              <input
                type="date"
                className="form-control"
                value={date}
                max={moment().format("yyyy-MM-DD")}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-md-3" />
          </div>

          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4">
                  <button
                    type="submit"
                    className="btn btn-md btn-primary expense-submit"
                    onClick={notify}
                  >
                    Submit
                  </button>
                </div>

                <div className="col-md-4" />
              </div>
              <div className="col-md-3" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-2">
              <a href="viewExpenses" className="view-anchorTag">
                View Expense
              </a>
            </div>
            <div className="col-md-3"></div>
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
