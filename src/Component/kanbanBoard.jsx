import "./CSS/kanbanBoard.css";
import { inProgressListState, taskListState } from "../recoilState/state.js";
import { useRecoilState, useRecoilValue } from "recoil";
import Todo from "./todo.jsx";
import { DndContext } from "@dnd-kit/core";

const KanbanBoard = () => {
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const { todoList, progressList, completeList } =
    useRecoilValue(inProgressListState);
  const HandleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    const taskID = active.id;
    const newStatus = over.id;
    setTaskList(
      taskList.map((t) => {
        if (t.id === taskID) {
          return { ...t, status: newStatus };
        } else {
          return t;
        }
      })
    );
    console.log(over);
  };
  return (
    <div className="boardWrapper">
      <DndContext onDragEnd={HandleDragEnd}>
        <Todo heading="Todo" color="#5045e6" task={todoList} />
        <Todo
          heading="In-Progress"
          color="#f69e0a"
          task={progressList}
        />
        <Todo heading="Complete" color="#22c45e" task={completeList} />
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
