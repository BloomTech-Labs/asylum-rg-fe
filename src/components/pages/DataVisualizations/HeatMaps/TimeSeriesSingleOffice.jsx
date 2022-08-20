import React from 'react';
import { useParams } from 'react-router-dom';

import Redux from 'redux';
import { connect } from 'react-redux';

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
    </div>
  );
}

export default connect(mapStateToProps)(TimeSeriesSingleOffice);
