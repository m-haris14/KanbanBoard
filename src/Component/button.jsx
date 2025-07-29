import { useRecoilState } from "recoil";
import { taskListState } from "../recoilState/state.js";

const ButtonWithCircle = ({ task }) => {
  const [taskList, setTaskList] = useRecoilState(taskListState);

  const options = [
    { label: "Important", color: "red" },
    { label: "High Priority", color: "orange" },
    { label: "OK", color: "green" },
  ];

  const currentIndex = options.findIndex((opt) => opt.label === task.value);
  const nextIndex = (currentIndex + 1) % options.length;

  const handleClick = (id) => {
    const updatedTaskList = taskList.map((t) =>
      t.id === id ? { ...t, value: options[nextIndex].label } : t
    );
    setTaskList(updatedTaskList);
    localStorage.setItem("Todo", JSON.stringify(updatedTaskList));
  };

  return (
    <button
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => {
        e.stopPropagation();
        handleClick(task.id);
      }}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
        gap: "8px",
      }}
    >
      <span
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: options[currentIndex]?.color || "gray",
        }}
      ></span>
      {task.value}
    </button>
  );
};

export default ButtonWithCircle;
