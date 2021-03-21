import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    authReducer: require("../reducer/authReducer").default,
    profileReducer: require("../reducer/profileReducer").default,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
