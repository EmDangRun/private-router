import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
let middleware = [thunk];
// apply logger middleware in the development environment
function loadUserData() {
  try {
    const serializedUserData = localStorage.getItem('authenticated');
    if (!serializedUserData) return undefined;

    return JSON.parse(serializedUserData);
  } catch (err) {
    return undefined;
  }
}
const persistedData = {
  auth: {
    authenticated: Boolean(loadUserData()),
  },
};
const store = createStore(rootReducer,persistedData, applyMiddleware(...middleware));

(() => {
  console.log("store", store.getState());
})();
export default store;
