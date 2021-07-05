import { combineReducers } from "redux";
import counterReducer from "./modules/Assignment10/counter/Reducer";
import mainReducer from "./modules/Assignment11/Mainscreen/reducers";
import {productReducer} from "./modules/Assignment14/reducer";
export const rootReducer = combineReducers({
  counterReducer,
  mainReducer,productReducer,
});


