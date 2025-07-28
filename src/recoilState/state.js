import {atom} from 'recoil';

export const taskListState = atom({
  key: 'taskListState',
  default: [],
});

export const editTaskState = atom({
  key: 'editTaskState',
  default: '',
});

export const inProgressState = atom({
  key: 'inProgressState',
  default: [],
})

export const completeState = atom({
  key: 'completeState',
  default: [],
})