import {useState} from "react";
import { useRecoilState } from "recoil";
import { taskListState, editTaskState } from "../recoilState/state.js";

const EditForm = ({id}) => {
  const [edit, setEdit] = useRecoilState(editTaskState);
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const [toggle, setToggle] = useState(false);

  const EditHandleSubmit = (e) => {
    e.preventDefault();
    setToggle(false);
  };
  const EditHandleInput = (e) => {
    setEdit(e.target.value);
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
    localStorage.setItem("Todo", JSON.stringify(taskList));
  };
  return (
    <div>
      <form onSubmit={EditHandleSubmit} className="inputForm">
        <div className="col-auto">
          <input
            type="number"
            className="form-control numberInput mb-3 border-0 border-bottom bg-transparent text-white"
            max={25}
            onChange={EditHandleInput}
            id="validationTooltip01"
            required
          />
        </div>
        <button
          type="submit"
          onClick={() => EditButton(id)}
          className="btn btn-primary mt-3 w-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
