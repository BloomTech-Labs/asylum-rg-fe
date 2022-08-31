import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';
import Table from './TableComponents/Table';
import { colors } from '../../../../styles/data_vis_colors';

const { background_color } = colors;

const mapStateToProps = (state, ownProps) => {
  const { office } = ownProps;
  return {
    timeSeriesData: state.vizReducer.offices[office].timeSeriesData,
  };
};

function TimeSeriesSingleOffice(props) {
  const { office, timeSeriesData } = props;
  const currentYear = new Date().getFullYear();
  const [plotlyGraphAxis, setPlotlyGraphAxis] = useState({
    x: [2015, currentYear],
    y: [],
  });

  useEffect(() => {
    if (timeSeriesData['singleOfficeDataObject'] !== undefined) {
      setPlotlyGraphAxis({
        x: timeSeriesData['singleOfficeDataObject']['xYears'],
        y: timeSeriesData['singleOfficeDataObject']['yTotalPercentGranteds'],
      });
    } else {
      setPlotlyGraphAxis({ x: [2015, currentYear], y: [] });
    }
  }, [timeSeriesData]);

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
        alignItems: 'center',
        minHeight: '100px',
      }}
    >
      <p>Showing: Time series data for {office}</p>
      <Plot
        data={[
          {
            x: plotlyGraphAxis['x'],
            y: plotlyGraphAxis['y'],
            type: 'scatter',
            mode: 'lines+markers',
            yMax: 1,
            dy: 1,
            dx: 1, // setting these explicitly so they are easy to change later
          },
        ]}
        layout={{
          title: `Grant Rate % for ${office}`,
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
              plotlyGraphAxis['x'][0],
              plotlyGraphAxis['x'][plotlyGraphAxis['x'].length - 1],
            ],
            title: `Year`,
          },
          paper_bgcolor: background_color,
          hoverlabel: {
            bordercolor: background_color,
          },
        }}
      />
      <p>Table view</p>
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
