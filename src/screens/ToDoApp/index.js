import "./style.css";
import { useState } from "react";
import { getTodoList, setTodoList } from "../../store/actions/todo.actions";
import { connect } from "react-redux";

const ToDo = (todoList, updateList) => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);

  console.log(todoList, "test");

  const addValue = () => {
    setList([...list, { title: task, status: false }]);
    updateList([...list, { title: task, status: false }]);
    setTask("");
  };

  const handleToggleComplete = (title) => {
    const newList = list.map((item) => {
      if (item.title === title) {
        const updatedItem = {
          ...item,
          status: !item.status,
        };

        return updatedItem;
      }

      return item;
    });

    setList(newList);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <form className="mt-5">
            <div className="form-group mt-5">
              <input
                type="text"
                className="form-control"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="col-md-2">
          <button
            type="submit"
            className="btn btn-primary btn-md submit-button"
            onClick={() => addValue()}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h1>Todo List</h1>
          {list.map((item, index) => {
            return (
              <div key={String(index)} className="row">
                <div className="col-md-10">
                  <span
                    style={{
                      textDecoration:
                        item.status && !edit ? "line-through" : "none",
                    }}
                    className="todo-list"
                  >
                    {item.title}
                  </span>
                </div>
                {edit && (
                  <div className="col-md-2">
                    <input
                      type="checkbox"
                      className="checkbox-btn"
                      checked={item.status}
                      onChange={() => handleToggleComplete(item.title)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="col-md-2">
          <button
            type="submit"
            className="btn btn-default btn-md edit-btn"
            onClick={() => setEdit(!edit)}
          >
            {edit ? "Save" : "Edit"}
          </button>
        </div>
        {/* {edit && (
            <div className="col-md-1">
              <button
                type="submit"
                className="btn btn-danger btn-md edit-btn"
                onClick={() => setEdit(false)}
              >
                Cancel
              </button>
            </div>
          )} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (payload) => dispatch(setTodoList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
