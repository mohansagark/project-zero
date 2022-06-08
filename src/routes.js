import { Routes, Route } from "react-router-dom";
import App from "./App";
import Todo from "./screens/ToDoApp";
import About from "./screens/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="todoApp" element={<Todo />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default Router;
