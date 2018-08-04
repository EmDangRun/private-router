import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
let middleware = [thunk];
// apply logger middleware in the development environment
const store = createStore(rootReducer, applyMiddleware(...middleware));

(() => {
  console.log("store", store.getState());
})();
export default store;
