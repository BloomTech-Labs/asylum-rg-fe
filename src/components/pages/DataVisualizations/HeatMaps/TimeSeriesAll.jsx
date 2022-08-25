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
  let {
    xYearsStart,
    xYearsEnd,
    xYears,
    yTotalPercentGranteds,
    totalPercentAdminCloseds,
    totalPercentDenieds,
    officeData,
  } = timeSeriesAllData;
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
      <Plot
        data={[
          {
            x: xYears,
            y: yTotalPercentGranteds,
            type: 'scatter',
            mode: 'lines+markers',
            dy: 1,
            dx: 1, // setting these explicitly so they are easy to change later
          },
        ]}
        layout={{
          height: 400,
          width: 400,
          yaxis: {
            range: [0, 100],
          },
          xaxis: {
            range: [xYearsStart, xYearsEnd],
          },
          paper_bgcolor: '#f7e4ca',
          hoverlabel: {
            bordercolor: '#f7e4ca',
          },
        }}
      />
    </div>
  );
}

export default connect(mapStateToProps)(TimeSeriesAll);
