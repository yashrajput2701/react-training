import { combineReducers } from "redux";
import counterReducer from "./modules/Assignment10/counter/Reducer";
import mainReducer from "./modules/Assignment11/Mainscreen/reducers";
const rootReducer = combineReducers({
  counterReducer,
  mainReducer,
});

export default rootReducer;
