import { GET_DATA } from '../constants';

const initialAsylumData = [];

function asylumReducer(state = initialAsylumData, action) {
  switch (action.type) {
    case GET_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default asylumReducer;
