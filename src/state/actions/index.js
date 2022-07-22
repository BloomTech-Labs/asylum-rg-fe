// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file

// import axios from 'axios';
import {
  GET_DATA,
  SET_DATE_FILTER_FORMAT,
  SET_ASYLUM_OFFICE_FILTER,
  SET_CONTINENT_FILTER,
  FILTER_SEARCH,
  RESET_DATA,
  SHOW_ADVANCED_SEARCH,
  ADVANCED_SEARCH,
} from '../constants';

// Action Creators
// export function fetchAllData() {
//   return function(dispatch) {
//     axios
//       .get(/*/cases*/)
//       .then(res => {
//         dispatch({ type: GET_DATA, payload: res.data });
//       })
//       .catch(err => console.log(err));
//   };
// }

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

export function showAdvanced(hideAdvanced) {
  return { type: SHOW_ADVANCED_SEARCH, payload: !hideAdvanced };
}

export function advancedSearch(parameters) {
  const { data, completion } = parameters;

  const parameterKeys = Object.keys(parameters);
  let count = 0;
  let payloadData = [];

  for (let i = 1; i < parameterKeys.length - 1; i++) {
    const currentKey = parameterKeys[i];
    const currentDataset = parameters[parameterKeys[i]];

    if (currentDataset !== null && count === 0) {
      payloadData = data.filter(entry =>
        currentDataset.includes(entry[currentKey])
      );
      count++;
    } else if (currentDataset !== null && count > 0) {
      payloadData = payloadData.filter(entry =>
        currentDataset.includes(entry[currentKey])
      );
    }
  }

  if (completion !== null) {
    const start = completion[0];
    const end = completion[1];

    if (count === 0) {
      payloadData = data.filter(
        entry =>
          entry.completion.toString('YYYY-MM-DD') >= start &&
          entry.completion.toString('YYYY-MM-DD') <= end
      );
    } else {
      payloadData = payloadData.filter(
        entry =>
          entry.completion.toString('YYYY-MM-DD') >= start &&
          entry.completion.toString('YYYY-MM-DD') <= end
      );
    }
  }

  return { type: ADVANCED_SEARCH, payload: payloadData };
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
