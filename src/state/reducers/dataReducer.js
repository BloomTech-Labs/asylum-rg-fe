import { combineReducers } from 'redux';
import { GET_DATA, FILTER_SEARCH, RESET_DATA } from '../constants';

// States
const initialCasesData = [];

const initialFilteredStates = {
  count: 0,
  data: [],
};

// Reducers
function casesReducer(state = initialCasesData, action) {
  switch (action.type) {
    case GET_DATA: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

function filteredReducer(state = initialFilteredStates, action) {
  switch (action.type) {
    case FILTER_SEARCH: {
      return { ...state, data: action.payload, count: state.count + 1 };
    }
    case RESET_DATA: {
      return initialFilteredStates;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({ casesReducer, filteredReducer });
