import Table from "../../components/Table/index";
import { connect } from "react-redux";

function ViewExpenses(props) {
  const { expenseList } = props;
  console.log(expenseList, "expense List");
  const headers = [
    {
      label: "category",
      value: "Category",
    },
    {
      label: "expenseDate",
      value: "Expense Date",
    },
    {
      label: "expenseName",
      value: "Expense Name",
    },
    {
      label: "expenseAmount",
      value: "Expense Amount",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center viewExpense-title">View Expenses</h1>
      <Table
        headers={headers}
        data={expenseList}
        editable={true}
        displayTotal={true}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    expenseList: state.expense.list,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ViewExpenses);
