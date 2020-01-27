import { createStore } from "redux";
import reducer from "./Reducer.js";

const store = createStore(reducer, {
  loggedIn: false,
  institutionName: "RollerMiller",
  institutionLogo: ""
});
export default store;
