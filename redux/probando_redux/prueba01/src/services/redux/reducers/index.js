import { combineReducers } from "redux";
import usersReducer from './users'
import vetsReducer from "./vets";
import petsReducer from "./pets";
import filterDatesReducer from "./filter_dates";

export default combineReducers({
    users: usersReducer,
    pets: petsReducer,
    vets: vetsReducer,
    filterDates: filterDatesReducer
})