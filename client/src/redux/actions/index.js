export const SET_ERROR = "SET_ERROR";

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload,
  };
}
