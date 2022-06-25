import { Routes, Route } from "react-router-dom";
import App from "./App";
import Todo from "./screens/ToDoApp";
import About from "./screens/About";
import ExpenseTracker from "./screens/ExpenseTracker";
import ViewExpenses from "./screens/ExpenseTracker/viewExpenses";
import PasswordGenerator from "./screens/PasswordGenerator";
import Login from "./screens/Login";
import PrivacyPolicy from "./screens/PrivacyPolicy";

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<App />} />
      <Route path="todoApp" element={<Todo />} />
      <Route path="about" element={<About />} />
      <Route path="passwordGenerator" element={<PasswordGenerator />} />
      <Route path="expenseTracker" element={<ExpenseTracker />} />
      <Route path="viewExpenses" element={<ViewExpenses />} />
      <Route path="privacyPolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default Router;
