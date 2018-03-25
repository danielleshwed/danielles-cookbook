export const UPDATE_INPUT = 'UPDATE_INPUT';
export const SAVE_RECIPES = 'SAVE_RECIPES';

export function updateInput(e,input){
  return { type: UPDATE_INPUT, data: input }
}

export function saveRecipes(recipes){
  return { type: SAVE_RECIPES, data: recipes }
}
