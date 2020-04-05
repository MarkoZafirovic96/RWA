import { FETCH_POST, NEW_POST, UPDATE_POST } from "./types";
export const fetchArrangements = () => (dispatch) => {
  return fetch("http://localhost:3000/arrangements")
    .then((res) => res.json())
    .then((arrangements) =>
      dispatch({
        type: FETCH_POST,
        payload: arrangements,
      })
    )
    .catch((logError) => console.log(logError));
};
