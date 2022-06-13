import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid nav">
      <div className="row margin">
        <div className="col-md-3 links">
          <span className="project-title">Project Zero</span>
        </div>
        <div className="col-md-8 links">
          <Link to="todoApp" className="text-white">
            ToDo App
          </Link>{" "}
          <Link to="expenseTracker" className="text-white">
            Expense Tracker
          </Link>{" "}
          <Link to="passwordGenerator" className="text-white">
            Password Generator
          </Link>{" "}
          <Link to="about">About</Link>
        </div>
        {/* <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div> */}
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default App;
