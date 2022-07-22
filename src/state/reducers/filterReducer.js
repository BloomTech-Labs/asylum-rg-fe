import {
  FILTER_SEARCH,
  RESET_DATA,
  SHOW_ADVANCED_SEARCH,
  ADVANCED_SEARCH,
} from '../constants';

const initialFilteredStates = {
  count: 0,
  data: [],
  hideAdvanced: true,
};

function filteredReducer(state = initialFilteredStates, action) {
  switch (action.type) {
    case FILTER_SEARCH: {
      return { ...state, data: action.payload, count: state.count + 1 };
    }
    case ADVANCED_SEARCH: {
      return { ...state, data: action.payload, count: state.count + 1 };
    }
    case RESET_DATA: {
      return initialFilteredStates;
    }
    case SHOW_ADVANCED_SEARCH: {
      return { ...state, hideAdvanced: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default filteredReducer;
