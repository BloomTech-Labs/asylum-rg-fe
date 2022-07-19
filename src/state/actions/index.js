/*Remember separation of concerns.
Import the action-types and export an action-creator function for each.
Each synchronous function should return an action object with a type and a payload -- these will be passed to the reducer.
Each asynchronous function should dispatch its action object (type/payload) to the reducer.
*/

import axios from 'axios';
import {
  GET_DATA, //Deprecated. Will be phased out soon for a more robust set of options
  GET_FILTERED_DATA,
  SET_DATE_FILTER_FORMAT,
  SET_ASYLUM_OFFICE_FILTER,
  SET_CONTINENT_FILTER,
} from '../constants';

export const getFilteredData = queryString => dispatch => {
  const url = '';
  queryString = '?asylumOffice=zmi,zny&citizenship=ANGOLA,DENMARK,SAUDI ARABIA';
  axios
    .get(url + queryString)
    .then(response => {
      dispatch({ type: GET_FILTERED_DATA, payload: response.data });
    })
    .catch(err => console.error(err));
};

//This will shortly be deprecated and need to be removed
export function getAllData(data) {
  return { type: GET_DATA, payload: data };
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
