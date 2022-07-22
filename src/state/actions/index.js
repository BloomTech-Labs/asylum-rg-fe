/*Remember separation of concerns.
Import the action-types and export an action-creator function for each.
Each synchronous function should return an action object with a type and a payload -- these will be passed to the reducer.
Each asynchronous function should dispatch its action object (type/payload) to the reducer.
*/
import axios from 'axios';
import {
  GET_FILTERED_DATA,
  SET_DATE_FILTER_FORMAT,
  SET_ASYLUM_OFFICE_FILTER,
  SET_CONTINENT_FILTER,
  FILTER_SEARCH,
  RESET_DATA,
  GET_DATA,
  SET_GEOPOLITICAL_FILTER,
  GET_MOCK_FILTERED_DATA,
} from '../constants';
import { generateMockFilteredData } from '../../data/mockAPI';

export const getFilteredData = queryString => dispatch => {
  const url = process.env.REACT_APP_CASE_DATA_API;
  axios
    .get(url + queryString)
    .then(response => {
      dispatch({ type: GET_FILTERED_DATA, payload: response.data });
    })
    //A failed-to-retrieve notification of some sort should be added to this catch:
    // dispatch({ type: SET_FETCH_FAIL})
    // Create a dataReducer slice of state to track this
    // Use conditional rendering to display an error to the user
    .catch(err => console.error(err));
};

//This will shortly be deprecated and need to be removed
export function getAllData(data) {
  return { type: GET_DATA, payload: data };
}

export function filterSearch({ data, searchTerm, category }) {
  const filteredData = data.filter(info =>
    info[category].toUpperCase().includes(searchTerm.toUpperCase())
  );

  return { type: FILTER_SEARCH, payload: filteredData };
}

export function resetData() {
  return { type: RESET_DATA };
}

export function setDateFilterFormat(isFiscalYear) {
  return { type: SET_DATE_FILTER_FORMAT, payload: isFiscalYear };
}

export function setAsylumOfficeFilter(offices) {
  return { type: SET_ASYLUM_OFFICE_FILTER, payload: offices };
}

export function setContinentFilter(continents) {
  return { type: SET_CONTINENT_FILTER, payload: continents };
}

export function setGeopoliticalFilter(regions) {
  return { type: SET_GEOPOLITICAL_FILTER, payload: regions };
}

export const getMockFilteredData = (queryString, caseCount) => {
  return {
    type: GET_MOCK_FILTERED_DATA,
    payload: generateMockFilteredData(queryString, caseCount),
  };
};
