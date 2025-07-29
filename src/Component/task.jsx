import { Trash } from "lucide-react";
import { useRecoilState } from "recoil";
import { taskListState } from "../recoilState/state.js";
import { useDraggable } from "@dnd-kit/core";

const Task = ({ t }) => {
  const [taskList, setTaskList] = useRecoilState(taskListState);

  const handleStatusChange = (e, id) => {
    const newStatus = e.target.value;
    const updatedList = taskList.map((t) =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    setTaskList(updatedList);
    localStorage.setItem("Todo", JSON.stringify(updatedList));
  };

  const deleteHandle = (id) => {
    setTaskList(
      taskList.filter((t) => {
        return t.id !== id;
      })
    );
    localStorage.setItem("Todo", JSON.stringify(taskList));
  };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: t.id,
  });

  const style = transform ? {transform: `translate(${transform.x}px, ${transform.y}px)`}: undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="card"
      style={style}
    >
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5 className="card-title">{t.task}</h5>
        </div>
        <div className="buttonWrapper">
          <select
            className="me-2 menu"
            onChange={(e) => handleStatusChange(e, t.id)}
            value={t.status}
          >
            <option value="todo">Todo</option>
            <option value="progress">In-Progress</option>
            <option value="complete">Complete</option>
          </select>
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
};

export default Task;
