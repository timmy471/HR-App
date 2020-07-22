import { createSore, applyMiddleware } from "redux";
import rootReducer from "../redux/reducers"

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initalStore = {};

const middleware = [thunk];

const store = createStore(
    rootreducer, initalStore, composeWithDevTools(...middleware)
);

export default store;