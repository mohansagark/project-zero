import "./style.scss";
import { useState } from "react";
import {
  resetTodoList,
  setTodoList,
  updateToDoItemStatus,
} from "../../store/actions/todo.actions";
import { connect } from "react-redux";
import BackNavigation from "../../components/BackNavigation";
import { Row, Col, Container, Button } from "react-bootstrap";
import { BiFastForward } from "react-icons/bi";
import CheckBox from "../../components/Checkbox";

const ToDo = ({ todoList, updateList, resetList, updateStatus }) => {
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState(false);

  const addValue = () => {
    if (task.trim()) {
      let uniq = "id" + new Date().getTime();
      let temp = { id: uniq, title: task, status: false };
      updateList(temp);
      setTask("");
    }
  };

  return (
    <Container fluid className="fluid-container todo-container">
      <BackNavigation title={"ToDo App"} />
      <Row className="todo">
        <Col lg={2} />
        <Col lg={8}>
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
        </Col>
        <Col lg={1}>
          <Button
            variant="primary"
            className="btn btn-primary btn-lg submit-button mt-5"
            onClick={() => addValue()}
          >
            Submit
          </Button>
        </Col>
      </Row>
      <Row>
        <Col lg={2} />
        <Col lg={6}>
          <h1 className="todo-title">Todo List</h1>
        </Col>
        {edit ? (
          <Col lg={1}>
            <Button
              variant="danger"
              className="btn btn-danger btn-md edit-btn"
              onClick={() => {
                setEdit(false);
                resetList();
              }}
            >
              Reset
            </Button>
          </Col>
        ) : (
          <Col lg={1} />
        )}
        {todoList.length > 0 && (
          <Col lg={1}>
            <Button
              variant="secondary"
              className="btn btn-default btn-md edit-btn"
              onClick={() => setEdit(!edit)}
            >
              {edit ? "Save" : "Edit"}
            </Button>
          </Col>
        )}
      </Row>
      <Row className="items-list">
        <Col lg={2} />
        <Col lg={8}>
          {todoList.length > 0 &&
            todoList.map((item, index) => {
              return (
                <div key={String(index)}>
                  <Col lg={11} className="todo-list">
                    <BiFastForward size={18} />
                    <span
                      style={{
                        textDecoration:
                          item.status && !edit ? "line-through" : "none",
                      }}
                    >
                      {item.title}
                    </span>
                  </Col>
                  {edit && (
                    <Col lg={1} className="checkbox-btn">
                      <CheckBox
                        title={""}
                        onCheck={() => updateStatus(item.id)}
                        checked={item.status}
                      />
                    </Col>
                  )}
                </div>
              );
            })}
        </Col>
        <Col lg={2} />
      </Row>
    </Container>
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
  updateStatus: (payload) => dispatch(updateToDoItemStatus(payload)),
  resetList: () => dispatch(resetTodoList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
