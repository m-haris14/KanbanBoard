import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { taskListState } from "../recoilState/state.js";

const Navbar = () => {
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const [task, setTask] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("Todo");
    if (stored) {
      setTaskList(JSON.parse(stored));
    }
  }, []);

  const HandleInput = (e) => {
    setTask(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const updatedTaskList = [
      ...taskList,
      { id: Date.now(), task: task, status: "Todo", value: "Important" },
    ];
    setTaskList(updatedTaskList);
    localStorage.setItem("Todo", JSON.stringify(updatedTaskList));
    setTask("");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ps-5">
        <div className="w-100 d-flex justify-content-between">
          <div className="d-flex align-item-center">
            <a className="navbar-brand text-white fw-bold m-o" href="#">
              Kanban Board
            </a>
          </div>
          <div className="w-25">
            <form onSubmit={HandleSubmit} className="d-flex" role="search">
              <input
                className="form-control me-2 w-100"
                type="text"
                value={task}
                onChange={HandleInput}
                required
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Add
              </button>
            </form>
          </div>

          <div>
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Drag. Drop. Dominate Your Workflow.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
