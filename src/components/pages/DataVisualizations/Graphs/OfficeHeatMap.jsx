import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';
import Table from './TableComponents/Table';
import { colors } from '../../../../styles/data_vis_colors';

const { background_color } = colors;

const mapStateToProps = state => {
  return {
    officeHeatMapData: state.vizReducer.officeHeatMapData,
  };
};

function OfficeHeatMap(props) {
  const { officeHeatMapData } = props;
  const [plotlyGraphAxis, setPlotlyGraphAxis] = useState({
    x: [],
    y: [],
    z: [],
  });
  const [rowsForTable, setRowsForTable] = useState([]);

  useEffect(() => {
    if (officeHeatMapData['officeHeatMapDataObject'] !== undefined) {
      setPlotlyGraphAxis({
        x: officeHeatMapData['officeHeatMapDataObject']['x'],
        y: officeHeatMapData['officeHeatMapDataObject']['y'],
        z: officeHeatMapData['officeHeatMapDataObject']['z'],
      });
    } else {
      setPlotlyGraphAxis({ x: [], y: [], z: [] });
    }
    if (officeHeatMapData.rowsForTable === undefined) {
      setRowsForTable([]);
    } else {
      setRowsForTable(officeHeatMapData.rowsForTable);
    }
  }, [officeHeatMapData]);

  const columnsForTable = [
    'Year [Office]',
    'Total Cases',
    '% Granted',
    '% Admin Close / Dismissal',
    '% Denied',
  ];

  return (
    <div
      className="office-heat-map-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100px',
        justifyContent: 'center',
      }}
    >
      <p>Showing: Rates of 'granted' case decision by asylum office, by year</p>
      <Plot
        data={[
          {
            x: plotlyGraphAxis['x'],
            y: plotlyGraphAxis['y'],
            z: plotlyGraphAxis['z'],
            type: 'heatmap',
          },
        ]}
        layout={{
          height: 500,
          width: 700,
          paper_bgcolor: background_color,
          hoverlabel: {
            bordercolor: background_color,
          },
        }}
      />
      <p>Table view</p>
      <Table
        rows={rowsForTable}
        columns={columnsForTable}
        tableWidth={'100%'}
        rowHeight={'50px'}
      />
    </div>
  );
}

export default connect(mapStateToProps)(OfficeHeatMap);
