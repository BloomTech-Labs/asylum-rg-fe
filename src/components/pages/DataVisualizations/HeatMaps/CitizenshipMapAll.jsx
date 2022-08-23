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
            type: 'choropleth',
            locationmode: 'country names',
            locations: ['MEXICO', 'CANADA', 'EL SALVADOR'],
            z: [1, 2, 3],
            text: ['MEXICO', 'CANADA', 'EL SALVADOR'],
            autocolorscale: true,
          },
        ]}
        layout={{
          paper_bgcolor: '#f7e4ca',
          hoverlabel: {
            bordercolor: '#f7e4ca',
          },
          geo: {
            scope: 'world',
            projection: {
              type: 'robinson',
            },
          },
        }}
        style={{ width: '100%', fontWeight: '900' }}
      />
    </div>
  );
}

export default connect(mapStateToProps)(CitizenshipMapAll);
