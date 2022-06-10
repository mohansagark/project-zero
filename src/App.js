import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Project Zero</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/todoApp">ToDo App</Link> |{" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="expenseTracker">Expense Tracker</Link>
      </nav>
    </div>
  );
}

export default App;
