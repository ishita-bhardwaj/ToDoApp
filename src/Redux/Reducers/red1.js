import {ADD_TASK, EDIT_TASK, DELETE_TASK} from '../Actions/act1';

const INITIAL_STATE = {
  task: [
    [
      {cat: 0, input: 'Raj'},
      {cat: 0, input: 'Rohan'},
      {cat: 0, input: 'Ishita'},
    ],
    [],
    [],
    [],
    [],
  ],
};

const taskadder = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_TASK:
      return {...state, ...payload};
    case EDIT_TASK:
      return {...state, ...payload};
    case DELETE_TASK:
      return {...state, ...payload};
    default:
      return state;
  }
};

export default taskadder;
