import { SAVE_RECIPES, UPDATE_INPUT } from './actions';

const initialState = {
  input: '',
  recipes: ''
};

function dashboardReducer(state = initialState, action){
  switch(action.type){
    case UPDATE_INPUT:
      return Object.assign({}, state, {
        input: action.data
      })
    case SAVE_RECIPES:
      return Object.assign({}, state, {
        recipes: action.data
      })
    default:
      return state;
  }
}

export default dashboardReducer;
