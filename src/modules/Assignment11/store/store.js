import rootReducer from "../../../rootreducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();
const multipleMiddlewares = compose(applyMiddleware(thunk , logger));
const store = createStore(rootReducer, multipleMiddlewares);

export default store;