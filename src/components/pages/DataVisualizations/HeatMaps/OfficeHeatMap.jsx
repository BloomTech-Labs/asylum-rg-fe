import React from 'react';

import Redux from 'redux';
import { connect } from 'react-redux';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';

const mapStateToProps = state => {
  return {
    officeHeatMapData: state.vizReducer.officeHeatMapData,
  };
};

function OfficeHeatMap(props) {
  const { officeHeatMapData } = props;
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
    </div>
  );
}

export default connect(mapStateToProps)(OfficeHeatMap);
