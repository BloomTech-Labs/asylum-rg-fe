import { GET_DATA } from '../actionTypes';

export const initialState = {
  data: [],
};
function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA: {
      return {
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default dataReducer;
