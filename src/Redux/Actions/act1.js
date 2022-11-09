export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addtask = data => {
  return {
    type: ADD_TASK,
    payload: {task: data},
  };
};

export const deleteTask = data => {
  return {
    type: DELETE_TASK,
    payload: {task: data},
  };
};

export const editTask = data => {
  return {
    type: EDIT_TASK,
    payload: {task: data},
  };
};
