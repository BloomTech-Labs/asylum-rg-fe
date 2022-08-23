import React from 'react';
import Plot from 'react-plotly.js';

import Redux from 'redux';
import { connect } from 'react-redux';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';

const mapStateToProps = state => {
  return {
    citizenshipMapAllData: state.vizReducer.citizenshipMapAllData,
  };
};

function CitizenshipMapAll(props) {
  const { citizenshipMapAllData } = props;
  return (
    <div
      className="citizenship-map-all-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
        padding: '10%',
      }}
    >
      <p>CITIZENSHIP MAP ALL</p>
      <p>{JSON.stringify(citizenshipMapAllData)}</p>
      <Plot
        data={[
          {
            type: 'chloropleth',
            locationmode: 'country names',
            locations: ['MEXICO', 'UNITED STATES', 'CANADA'],
            z: ['red', 'orange', 'blue'],
            autocolorscale: 'true',
            text: ['MEXICO', 'UNITED STATES', 'CANADA'],
          },
        ]}
        layout={{
          geo: {
            projection: {
              type: 'robinson',
            },
          },
          height: 400,
          width: 400,
        }}
      />
    </div>
  );
}

export default connect(mapStateToProps)(CitizenshipMapAll);
