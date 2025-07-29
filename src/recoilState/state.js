import { atom, selector } from "recoil";

export const taskListState = atom({
  key: "taskListState",
  default: [],
});

export const editTaskState = atom({
  key: "editTaskState",
  default: "",
});

export const inProgressState = atom({
  key: "inProgressState",
  default: [],
});

export const completeState = atom({
  key: "completeState",
  default: [],
});

export const TotalTodoListState = selector({
  key: "TotalTodoListState",
  get: ({ get }) => {
    const todo = get(taskListState);
    return todo.length;
  },
});

export const inProgressListState = selector({
  key: "inProgressListState",
  get: ({ get }) => {
    const todo = get(taskListState);
    const todoList = todo.filter((t) => {
      return t.status === "Todo";
    });
    const progressList = todo.filter((t) => {
      return t.status === "In-Progress";
    });
    const completeList = todo.filter((t) => {
      return t.status === "Complete";
    });

    return{
      todoList,
      progressList,
      completeList
    }
  },
});
