import React from 'react';
import { useParams } from 'react-router-dom';

import Redux from 'redux';
import { connect } from 'react-redux';

import Plot from 'react-plotly.js';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';

const mapStateToProps = (state, ownProps) => {
  const { office, timeSeriesData } = ownProps;
  return {
    timeSeriesData: state.vizReducer.offices[office].timeSeriesData,
  };
};

function TimeSeriesSingleOffice(props) {
  const { office, timeSeriesData } = props;
  return (
    <div
      className="time-series-single-office-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100px',
        backgroundColor: 'lightgreen',
        padding: '10%',
      }}
    >
      <p>TIME SERIES {office}</p>
      <p>{JSON.stringify(timeSeriesData)}</p>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [1, 2, 3],
            type: 'scatter',
            mode: 'lines+markers',
            y0: 0,
            x0: 2015,
            dy: 1,
            dx: 1, // setting these explicitly so they are easy to change later
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

export default connect(mapStateToProps)(TimeSeriesSingleOffice);
