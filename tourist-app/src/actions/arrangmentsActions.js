import { FETCH_POST, NEW_POST, UPDATE_POST } from "./types";
export const fetchArrangments = () => (dispatch) => {
  console.log("Fetching arrangments");

  return fetch("http://localhost:8080/arrangments", {
    method: "POST",
    headers: { "content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((arrangments) =>
      dispatch({
        type: FETCH_POST,
        payload: arrangments,
      })
    )
    .catch((logError) => console.log(logError));
};
