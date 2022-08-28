import React from 'react';
import { useParams } from 'react-router-dom';

import Redux from 'redux';
import { connect } from 'react-redux';

import Plot from 'react-plotly.js';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';
import Table from './TableComponents/Table';

const mapStateToProps = (state, ownProps) => {
  const { office, timeSeriesData } = ownProps;
  return {
    timeSeriesData: state.vizReducer.offices[office].timeSeriesData,
  };
};

function TimeSeriesSingleOffice(props) {
  const { office, timeSeriesData } = props;
  const xYearsStart = timeSeriesData.hasOwnProperty('xYearsStart')
    ? timeSeriesData.xYearsStart
    : 2015;
  const xYearsEnd = timeSeriesData.hasOwnProperty('xYearsEnd')
    ? timeSeriesData.xYearsEnd
    : 2022;
  const xYears = timeSeriesData.hasOwnProperty('xYears')
    ? timeSeriesData.xYears
    : [];
  const yPercentGranteds = timeSeriesData.hasOwnProperty('yPercentGranteds')
    ? timeSeriesData.yPercentGranteds
    : [];
  const percentAdminCloseds = timeSeriesData.hasOwnProperty(
    'percentAdminCloseds'
  )
    ? timeSeriesData.percentAdminCloseds
    : [];
  const percentDenieds = timeSeriesData.hasOwnProperty('percentDenieds')
    ? timeSeriesData.percentDenieds
    : [];
  const rowsForTable = timeSeriesData.hasOwnProperty('rowsForTable')
    ? timeSeriesData.rowsForTable
    : [];
  const columnsForTable = [
    'Year',
    'Total Cases',
    '% Granted',
    '% Admin Close / Dismissal',
    '% Denied',
  ];
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
      <Plot
        data={[
          {
            x: xYears,
            y: yPercentGranteds,
            type: 'scatter',
            mode: 'lines+markers',
            yMax: 1,
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
      <Table
        columns={columnsForTable}
        rows={rowsForTable}
        tableWidth={'100%'}
        rowHeight={'50px'}
      />
    </div>
  );
}

export default connect(mapStateToProps)(TimeSeriesSingleOffice);
