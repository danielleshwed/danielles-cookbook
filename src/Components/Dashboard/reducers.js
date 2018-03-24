import { BUTTON_CLICK, UPDATE_INPUT } from './actions';

const initialState = {
  input: ''
};

function dashboardReducer(state = initialState, action){
  switch(action.type){
    case UPDATE_INPUT:
      return Object.assign({}, state, {
        input: action.data
      })
    default:
      return state;
  }
}

export default dashboardReducer;
