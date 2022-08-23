import React from 'react';
import { useParams } from 'react-router-dom';

import Redux from 'redux';
import { connect } from 'react-redux';

import Plot from 'react-plotly.js';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';

const mapStateToProps = (state, ownProps) => {
  const { office } = ownProps;
  return {
    citizenshipMapData: state.vizReducer.offices[office].citizenshipMapData,
  };
};

function CitizenshipMapSingleOffice(props) {
  const { office, citizenshipMapData } = props;
  console.log(`CITIZENSHIP DATA FOR ${office}:`);
  console.log(citizenshipMapData);
  return (
    <div
      className="citizenship-map-single-office-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: 'rgb(220,150,150)',
        padding: '10%',
      }}
    >
      <p>CITIZENSHIP MAP {office}</p>
      <p>{JSON.stringify(citizenshipMapData)}</p>
      <Plot
        data={[
          {
            type: 'chloropleth',
          },
        ]}
        layout={{
          height: 400,
          width: 400,
        }}
      />
    </div>
  );
}

export default connect(mapStateToProps)(CitizenshipMapSingleOffice);
