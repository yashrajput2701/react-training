import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../../../src/rootreducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger();
const multipleMiddlewares = compose(applyMiddleware(thunk, logger));


const store = createStore(rootReducer, multipleMiddlewares);

export default store;