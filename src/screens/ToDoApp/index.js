import "./style.css";
import { useState } from "react";
import { resetTodoList, setTodoList } from "../../store/actions/todo.actions";
import { connect } from "react-redux";

const ToDo = ({ todoList, updateList, resetList }) => {
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState(false);

  const addValue = () => {
    if (task.trim()) {
      let temp = [...todoList];
      let uniq = "id" + new Date().getTime();
      temp.push({ id: uniq, title: task, status: false });
      updateList(temp);
      setTask("");
    }
  };

  const handleToggleComplete = (id) => {
    const newList = todoList.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          status: !item.status,
        };

        return updatedItem;
      }

      return item;
    });
    updateList(newList);
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
          {todoList.length > 0 &&
            todoList.map((item, index) => {
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
                        onChange={() => handleToggleComplete(item.id)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        {todoList.length > 0 && (
          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-default btn-md edit-btn"
              onClick={() => setEdit(!edit)}
            >
              {edit ? "Save" : "Edit"}
            </button>
          </div>
        )}
        {edit && (
          <div className="col-md-1">
            <button
              type="submit"
              className="btn btn-danger btn-md edit-btn"
              onClick={() => {
                setEdit(false);
                resetList();
              }}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.list,
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateList: (payload) => dispatch(setTodoList(payload)),
  resetList: () => dispatch(resetTodoList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
