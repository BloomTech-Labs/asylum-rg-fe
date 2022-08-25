import React from 'react';

import Redux from 'redux';
import { connect } from 'react-redux';

import Plot from 'react-plotly.js';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';

const mapStateToProps = state => {
  return {
    officeHeatMapData: state.vizReducer.officeHeatMapData,
  };
};

function OfficeHeatMap(props) {
  const { officeHeatMapData } = props;
  let {
    yYearsStart,
    yYearsEnd,
    yYears,
    totalsByOffice,
    zPercentGrantedsByOffice,
    percentAdminClosedsByOffice,
    percentDeniedsByOffice,
  } = officeHeatMapData;
  console.log(officeHeatMapData);
  console.log(zPercentGrantedsByOffice);
  const officeCodes = [
    'ZLA',
    'ZSF',
    'ZNY',
    'ZHN',
    'ZCH',
    'ZNK',
    'ZAR',
    'ZBO',
    'ZMI',
    'ZOL',
  ];
  const displayOfficeData = [];
  if (zPercentGrantedsByOffice) {
    for (let years_idx = 0; years_idx < yYears.length; years_idx++) {
      let yearDataItem = [];
      for (
        let offices_idx = 0;
        offices_idx < officeCodes.length;
        offices_idx++
      ) {
        if (zPercentGrantedsByOffice.hasOwnProperty(officeCodes[offices_idx])) {
          yearDataItem.push(
            zPercentGrantedsByOffice[officeCodes[offices_idx]][years_idx]
          );
        } else {
          yearDataItem.push(0);
        }
      }
      displayOfficeData.push(yearDataItem);
    }
  }
  return (
    <div
      className="office-heat-map-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'lightgray',
        minHeight: '100px',
        justifyContent: 'center',
        color: 'white',
        padding: '10%',
      }}
    >
      <p>OFFICE HEAT MAP</p>
      <Plot
        data={[
          {
            x: officeCodes,
            y: yYears,
            z: displayOfficeData,
            type: 'heatmap',
          },
        ]}
        layout={{
          height: 400,
          width: 400,
          paper_bgcolor: '#f7e4ca',
          hoverlabel: {
            bordercolor: '#f7e4ca',
          },
        }}
      />
    </div>
  );
}

export default connect(mapStateToProps)(OfficeHeatMap);
