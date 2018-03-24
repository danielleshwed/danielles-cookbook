import { GET_DETAILS } from './actions';


const initialState = {
  name: '',
  desc: '',
  ingredients: '',
  steps: '',
  img: '',
  redirect: false
};

function recipeReducer(state = initialState, action) {

  switch(action.type){
    case GET_DETAILS:
      return Object.assign({}, state, {
        name: action.data.name,
        desc: action.data.desc,
        ingredients: action.data.ingredients,
        steps: action.data.steps,
        img: action.data.img,
        redirect: true
      })
    default:
      return state;
  }
}

export default recipeReducer;
