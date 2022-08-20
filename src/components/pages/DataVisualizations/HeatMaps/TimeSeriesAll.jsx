import React from 'react';

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
    </div>
  );
}

export default connect(mapStateToProps)(TimeSeriesAll);
