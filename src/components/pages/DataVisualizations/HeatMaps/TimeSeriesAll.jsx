import React from 'react';
import Plot from 'react-plotly.js';

import Redux from 'redux';
import { connect } from 'react-redux';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';

const mapStateToProps = state => {
  return {
    timeSeriesAllData: state.vizReducer.timeSeriesAllData,
  };
};

function TimeSeriesAll(props) {
  const { timeSeriesAllData } = props;
  console.log(`timeSeriesAllData:`);
  console.log(timeSeriesAllData);
  return (
    <div
      className="time-series-all-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
        backgroundColor: 'rgb(200,200,100)',
        justifyContent: 'center',
        padding: '10%',
      }}
    >
      <p>TIME SERIES ALL</p>
      <p>{JSON.stringify(timeSeriesAllData)}</p>
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

export default connect(mapStateToProps)(TimeSeriesAll);
