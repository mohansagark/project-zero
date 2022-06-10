import Table from "../../components/Table/index";

function ViewExpenses() {
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

  const data = [
    {
      expenseName: "Groceries",
      category: "Daily Products",
      expenseDate: "10-06-2022",
      expenseAmount: 600,
    },
    {
      expenseName: "Electricity Bill",
      expenseAmount: 3000,
      category: "Power Bill",
    },
    {
      expenseName: "Water Bill",
      expenseAmount: 1200,
      expenseDate: "12-06-2022",
    },
    {
      expenseAmount: 14000,
      category: "Montly Expenses",
      expenseDate: "13-06-2022",
    },
    {
      expenseName: "Petrol Expense",
      expenseAmount: 4400,
      category: "Montly Expenses",
      expenseDate: "15-06-2022",
    },
    {
      expenseName: "House Rent",
      expenseAmount: 10000,
      category: "Montly Expenses",
      expenseDate: "10-06-2022",
    },
    {
      expenseName: "Milk",
      expenseAmount: 1000,
      category: "Montly Expenses",
      expenseDate: "10-06-2022",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center">View Expenses</h1>
      <Table
        headers={headers}
        data={data}
        editable={true}
        displayTotal={true}
      />
    </div>
  );
}

export default ViewExpenses;
