export const GET_DETAILS = "GET_DETAILS";

export function getDetails(name, desc, ingredients, steps, img) {
  return {
    type: GET_DETAILS,
    data: { name, desc, ingredients, steps, img }
  };
}
