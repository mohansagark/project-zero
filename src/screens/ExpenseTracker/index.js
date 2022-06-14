import "./styles.scss";
import { connect } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { capitalize, validateAlphabets, validateNumber } from "../../helpers/general";
import { setExpenseList } from "../../store/actions/expense.actions";
import BackNavigation from "../../components/BackNavigation";

const ExpenseTracker = (props) => {
  const { addExpense } = props;
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const options = [
    {
      label: "Daily Products",
      value: "dailyProducts",
    },
    {
      label: "Power Bill",
      value: "powerBill",
    },
    {
      label: "Groceries",
      value: "groceries",
    },
    {
      label: "House Rent",
      value: "houseRent",
    },
  ];

  const clearForm = () => {
    setAmount("");
    setCategory("");
    setDate("");
    setName("");
  };

  const notify = () => {
    if (name && amount && date && category) {
      toast.success(`${name} is added to the Expense List!`);
      clearForm();
      const payload = {
        expenseName: capitalize(name),
        category: category,
        expenseDate: date,
        expenseAmount: amount,
      };
      addExpense(payload);
    }
  };
  const handleName = (e) => {
    if (validateAlphabets(e)) {
      setName(e);
    }
  };

  const handleAmount = (e) => {
    if (validateNumber(e)) {
      setAmount(e);
    }
  };

  return (
    <div className="fluid-container expense-container">
      <BackNavigation title={"Expense Tracker"} />
      <div className="row expense-tracker">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row alignCenter">
            <div className="col-md-2" />
            <div className="col-md-2 form-group">
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
                onChange={(e) => handleAmount(e.target.value)}
              />
            </div>
            <div className="col-md-3" />
          </div>

          <div className="row alignCenter">
            <div className="col-md-2" />
            <div className="col-md-2 form-group">
              <label>Category</label>
            </div>
            <div className="col-md-5 ">
              <select
                className="form-control form-select form-select-lg mb-3 form-group"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value={""} disabled className="options">
                  Choose category
                </option>
                {options.map((option, index) => (
                  <option
                    value={option.value}
                    key={String(index)}
                    className="options"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
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
            <div className="col-md-2 view-anchorTag">
              <a href="viewExpenses">View Expense</a>
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

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => {
    dispatch(setExpenseList(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker);
