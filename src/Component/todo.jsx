import { useState } from "react";
import "./CSS/todo.css";
import { useRecoilState } from "recoil";
import { taskListState, editTaskState } from "../recoilState/state.js";
import { Trash, SquarePen } from "lucide-react";
const Todo = ({ heading, color }) => {
  const [edit, setEdit] = useRecoilState(editTaskState);
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const [toggle, setToggle] = useState(false);
  const deleteHandle = (id) => {
    setTaskList(
      taskList.filter((t) => {
        return t.id !== id;
      })
    );
  };

  const EditHandleSubmit = (e) => {
    e.preventDefault();
    setToggle(false);
  };

  const EditHandleInput = (e) => {
    setEdit(e.target.value);
  };

  const editHandle = () => {
    setToggle(true);
  };

  const EditButton = (id) => {
    setTaskList(
      taskList.map((t) => {
        if (t.id == id) {
          return { ...t, task: edit };
        } else {
          return t;
        }
      })
    );
  };
  if (taskList.length > 0) {
    return (
      <div className="todoWrapper">
        <div className="todoHeader">
          <div className="headerWrapper">
            <div
              className="todo-theme"
              style={{ backgroundColor: color }}
            ></div>
            <h3>{heading}</h3>
          </div>
          <div className="total-todo">0 Total</div>
        </div>
        {taskList.map((t) => {
          return (
            <div className="card" key={t.id}>
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5 className="card-title">{t.task}</h5>
                </div>
                <div class="buttonWrapper">
                  {toggle ? (
                    <form onSubmit={EditHandleSubmit} action="">
                      <input type="text" onChange={EditHandleInput} />
                      <button onClick={() => EditButton(t.id)}>Add</button>
                    </form>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-outline-primary me-2"
                      onClick={editHandle}
                    >
                      <SquarePen size={22} strokeWidth={1.75} />
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => deleteHandle(t.id)}
                  >
                    <Trash size={22} strokeWidth={1.75} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h4 className="text-center mt-2">No Task Found</h4>;
  }
};

export default Todo;
