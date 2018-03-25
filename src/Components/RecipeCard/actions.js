export const GET_DETAILS = "GET_DETAILS";
export const REDIRECT = "REDIRECT";

export function getDetails(name, desc, ingredients, steps, img) {
  return {
    type: GET_DETAILS,
    data: { name, desc, ingredients, steps, img }
  };
}

export function redirectBrowser(){
  return{
    type: REDIRECT
  }
}
