import { CHANGE_FILTER_DATES, filter_dates } from "../actions/dates";

const initialState = filter_dates.ALL;

const filterDatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER_DATES:
            return action.payload;
    
        default:
            return state;
    }
}

export default filterDatesReducer