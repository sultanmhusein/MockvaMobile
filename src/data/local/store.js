import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    authReducer: require("../reducer/authReducer").default,
    profileReducer: require("../reducer/profileReducer").default,
    historyReducer: require("../reducer/historyReducer").default,
    transferReducer: require("../reducer/transferReducer").default
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
