import { Trash } from "lucide-react";
import { useRecoilState } from "recoil";
import { taskListState } from "../recoilState/state.js";
import { useDraggable } from "@dnd-kit/core";
import ButtonWithCircle from "./button.jsx";


const Task = ({ t }) => {
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: t.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  const deleteHandle = (id) => {
    const updatedList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedList);
    localStorage.setItem("Todo", JSON.stringify(updatedList));
  };

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
          <ButtonWithCircle task={t}/>
          <button
            className="btn btn-outline-primary"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              deleteHandle(t.id);
            }}
          >
            <Trash size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
