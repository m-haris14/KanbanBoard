import './CSS/kanbanBoard.css';
import { taskListState } from "../recoilState/state.js";
import { useRecoilState } from "recoil";
import Todo from './todo.jsx';

const KanbanBoard = () => {
    const taskList = useRecoilState(taskListState);
    console.log(taskList);
  return (
    <div className="boardWrapper">
      <Todo heading= "Todo" color="#5045e6"/>
      <Todo heading= "In-Progress" color="#f69e0a"/>
      <Todo heading= "Complete" color="#22c45e"/>
    </div>
  );
};

export default KanbanBoard;
