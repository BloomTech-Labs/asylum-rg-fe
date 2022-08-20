import { SET_VISUALIZATION_DATA, SET_HEAT_MAP_YEARS } from '../actionTypes';

export const initialState = {
  timeSeriesAllData: [],
  timeSeriesAllYears: [2015, 2022],
  officeHeatMapData: [],
  officeHeatMapYears: [2015, 2022],
  citizenshipMapAllData: [],
  citizenshipMapAllYears: [2015, 2022],
  offices: {
    ZLA: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
    ZSF: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
    ZNY: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
    ZHN: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
    ZCH: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
    ZNK: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
    ZAR: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
    ZBO: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
    ZMI: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
    ZOL: {
      timeSeriesData: [],
      timeSeriesYears: [2015, 2022],
      citizenshipMapData: [],
      citizenshipMapYears: [2015, 2022],
    },
  },
};

const vizReducer = (state = initialState, action) => {
  let dataKey = '';
  switch (action.type) {
    case SET_VISUALIZATION_DATA:
      if (!action.payload.office) {
        switch (action.payload.view) {
          case 'time-series':
            dataKey = 'timeSeriesAllData';
            break;
          case 'office-heat-map':
            dataKey = 'officeHeatMapData';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapAllData';
            break;
          default:
            break;
        }
        /** SIDE EFFECTS FOR TEST PURPOSES --MACK **/
        console.log('ACTION.PAYLOAD:');
        console.log(action.payload);
        console.log('STATE:');
        console.log(state);
        /** **/
        return {
          ...state,
          [dataKey]: action.payload.data,
        };
      } else {
        switch (action.payload.view) {
          case 'time-series':
            dataKey = 'timeSeriesData';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapData';
            break;
          default:
            break;
        }
        /** SIDE EFFECTS FOR TEST PURPOSES --MACK **/
        console.log('ACTION.PAYLOAD:');
        console.log(action.payload);
        console.log('STATE:');
        console.log(state);
        /** **/
        return {
          ...state,
          offices: {
            ...state.offices,
            [action.payload.office]: {
              ...state.offices[action.payload.office],
              [dataKey]: action.payload.data,
            },
          },
        };
      }
    case SET_HEAT_MAP_YEARS:
      if (!action.payload.office) {
        switch (action.payload.view) {
          case 'time-series':
            dataKey = 'timeSeriesAllYears';
            break;
          case 'office-heat-map':
            dataKey = 'officeHeatMapYears';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapAllYears';
            break;
          default:
            dataKey = 'timeSeriesAllYears';
            break;
        }
        /** SIDE EFFECTS FOR TEST PURPOSES --MACK **/
        console.log('ACTION.PAYLOAD:');
        console.log(action.payload);
        console.log('STATE:');
        console.log(state);
        /** **/
        return {
          ...state,
          [dataKey]:
            action.payload.idx === 0
              ? [action.payload.year, state[dataKey][1]]
              : [state[dataKey][0], action.payload.year],
        };
      } else {
        switch (action.payload.view) {
          case 'time-series':
            dataKey = 'timeSeriesYears';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapYears';
            break;
          default:
            dataKey = 'timeSeriesYears';
            break;
        }
        /** SIDE EFFECTS FOR TEST PURPOSES --MACK **/
        console.log('ACTION.PAYLOAD:');
        console.log(action.payload);
        console.log('STATE:');
        console.log(state);
        /** **/
        return {
          ...state,
          offices: {
            ...state.offices,
            [action.payload.office]: {
              ...state.offices[action.payload.office],
              [dataKey]:
                action.payload.idx === 0
                  ? [
                      action.payload.year,
                      state.offices[action.payload.office][dataKey][1],
                    ]
                  : [
                      state.offices[action.payload.office][dataKey][0],
                      action.payload.year,
                    ],
            },
          },
        };
      }
    default:
      return state;
  }
};

export default vizReducer;
