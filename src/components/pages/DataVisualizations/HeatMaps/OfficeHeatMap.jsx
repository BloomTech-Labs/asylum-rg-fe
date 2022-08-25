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
  const {
    yYearsStart,
    yYearsEnd,
    yYears,
    totalsByOffice,
    zPercentGrantedsByOffice,
    percentAdminClosedsByOffice,
    percentDeniedsByOffice,
  } = officeHeatMapData;
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
      <p>{JSON.stringify(officeHeatMapData)}</p>
      <Plot
        data={[
          {
            x: officeHeatMapData[0] ? [1, 2, 3] : [1, 2, 3],
            y: officeHeatMapData[0] ? [1, 2, 3] : [1, 2, 3],
            z: officeHeatMapData[0]
              ? [
                  [0, 2, 1],
                  [2, 4, 5],
                  [1, 3, 4],
                ]
              : [
                  [0, 2, 1],
                  [2, 4, 5],
                  [1, 3, 4],
                ],
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
