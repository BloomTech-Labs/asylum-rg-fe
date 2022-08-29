import React from 'react';
import Plot from 'react-plotly.js';

import Redux from 'redux';
import { connect } from 'react-redux';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';

import Table from './TableComponents/Table';

const mapStateToProps = state => {
  return {
    timeSeriesAllData: state.vizReducer.timeSeriesAllData,
  };
};

function TimeSeriesAll(props) {
  const { timeSeriesAllData } = props;
  let xYearsStart = timeSeriesAllData.hasOwnProperty('xYearsStart')
    ? timeSeriesAllData.xYearsStart
    : 2015;
  let xYearsEnd = timeSeriesAllData.hasOwnProperty('xYearsEnd')
    ? timeSeriesAllData.xYearsEnd
    : 2022;
  let xYears = timeSeriesAllData.hasOwnProperty('xYears')
    ? timeSeriesAllData.xYears
    : [];
  let totals = timeSeriesAllData.hasOwnProperty('totals')
    ? timeSeriesAllData.totals
    : [];
  let yTotalPercentGranteds = timeSeriesAllData.hasOwnProperty(
    'yTotalPercentGranteds'
  )
    ? timeSeriesAllData.yTotalPercentGranteds
    : [];
  let totalPercentAdminCloseds = timeSeriesAllData.hasOwnProperty(
    'totalPercentAdminCloseds'
  )
    ? timeSeriesAllData.totalPercentAdminCloseds
    : [];
  let totalPercentDenieds = timeSeriesAllData.hasOwnProperty(
    'totalPercentDenieds'
  )
    ? timeSeriesAllData.totalPercentDenieds
    : [];
  let officeData = timeSeriesAllData.hasOwnProperty('officeData')
    ? timeSeriesAllData.officeData
    : {};
  let rowsForAllDisplay = timeSeriesAllData.hasOwnProperty('rowsForAllDisplay')
    ? timeSeriesAllData.rowsForAllDisplay
    : [];
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
  const columnsForAllDisplay = [
    'Year',
    'Total Cases',
    '% Granted',
    '% Admin Close / Dismissal',
    '% Denied',
  ];
  return (
    <div
      className="time-series-all-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100px',
        justifyContent: 'center',
      }}
    >
      <p>Showing: Time series data for all asylum offices</p>
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
          height: 500,
          width: 700,
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
      <p>Table view</p>
      <Table
        columns={columnsForAllDisplay}
        rows={rowsForAllDisplay}
        tableWidth={'100%'}
        rowHeight={'50px'}
      />
    </div>
  );
}

export default connect(mapStateToProps)(TimeSeriesAll);
