export const UPDATE_INPUT = 'UPDATE_INPUT';

export function updateInput(e,input){
  return { type: UPDATE_INPUT, data: input }
}
