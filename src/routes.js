import { Routes, Route } from "react-router-dom";
import App from "./App";
import Todo from "./screens/ToDoApp";
import About from "./screens/About";
import ExpenseTracker from './screens/ExpenseTracker';
import ViewExpenses from "./screens/ExpenseTracker/viewExpenses";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="todoApp" element={<Todo />} /> 
      <Route path="about" element={<About />} />
      <Route path="expenseTracker" element={<ExpenseTracker />} />
      <Route path="viewExpenses" element={<ViewExpenses />} />
    </Routes>
  );
};

export default Router;
