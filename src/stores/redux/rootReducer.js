import { combineReducers } from "redux";

import propertiesReducer from "./reducers/propertiesReducer";

const rootReducer = combineReducers({
  propertiesReducer,
});

export default rootReducer;
