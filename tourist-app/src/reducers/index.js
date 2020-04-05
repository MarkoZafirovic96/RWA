import { combineReducers } from "redux";
import arrangementsReducer from "./arrangementsReducer";

export default combineReducers({
  arrangements: arrangementsReducer,
});
