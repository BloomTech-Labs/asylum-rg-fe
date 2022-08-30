import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import Table from './TableComponents/Table';

const mapStateToProps = state => {
  return {
    timeSeriesAllData: state.vizReducer.timeSeriesAllData,
  };
};

function TimeSeriesAll(props) {
  const { timeSeriesAllData } = props;
  const currentYear = new Date().getFullYear();

  let rowsForAllDisplay = timeSeriesAllData['rowsForAllDisplay']
    ? timeSeriesAllData.rowsForAllDisplay
    : [];

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
            x: timeSeriesAllData['xYears'],
            y: timeSeriesAllData['yTotalPercentGranteds'],
            type: 'scatter',
            mode: 'lines+markers',
            dy: 1,
            dx: 1, // setting these explicitly so they are easy to change later
          },
        ]}
        layout={{
          title: 'Grant Rate for All Offices',
          height: 500,
          width: 700,
          yaxis: {
            range: [0, 100],
            title: `Grant Rate %`,
            autotick: false,
            dtick: 10,
          },
          xaxis: {
            range: [
              timeSeriesAllData[0] || 2015,
              timeSeriesAllData[timeSeriesAllData.length - 1] || currentYear,
            ],
            title: 'Year',
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
