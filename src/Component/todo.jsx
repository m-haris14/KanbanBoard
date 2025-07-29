import "./CSS/todo.css";
import { useDroppable } from "@dnd-kit/core";
import Task from "./task.jsx";

const Todo = ({ heading, color, task }) => {
  const { setNodeRef } = useDroppable({
    id: heading,
  });

  return (
    <div className="todoWrapper" ref={setNodeRef}>
      <div className="todoHeader">
        <div className="headerWrapper">
          <div className="todo-theme" style={{ backgroundColor: color }}></div>
          <h3>{heading}</h3>
        </div>
        <div className="total-todo">{task.length} Total</div>
      </div>
      {task.length === 0 ? (
        <h4 className="text-center mt-2">No Task Found</h4>
      ) : (
        task.map((t) => {
          return <Task t={t} key={t.id}/>;
        })
      )}
    </div>
  );
};

export default Todo;
