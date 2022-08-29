import React from 'react';

import Redux from 'redux';
import { connect } from 'react-redux';

import Plot from 'react-plotly.js';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';
import Table from './TableComponents/Table';

const mapStateToProps = state => {
  return {
    officeHeatMapData: state.vizReducer.officeHeatMapData,
  };
};

function OfficeHeatMap(props) {
  const { officeHeatMapData } = props;
  const yYearsStart = officeHeatMapData.hasOwnProperty('yYearsStart')
    ? officeHeatMapData.yYearsStart
    : 2015;
  const yYearsEnd = officeHeatMapData.hasOwnProperty('yYearsEnd')
    ? officeHeatMapData.yYearsEnd
    : 2022;
  const yYears = officeHeatMapData.hasOwnProperty('yYears')
    ? officeHeatMapData.yYears
    : [];
  const totalsByOffice = officeHeatMapData.hasOwnProperty('totalsByOffice')
    ? officeHeatMapData.totalsByOffice
    : [];
  const zPercentGrantedsByOffice = officeHeatMapData.hasOwnProperty(
    'zPercentGrantedsByOffice'
  )
    ? officeHeatMapData.zPercentGrantedsByOffice
    : [];
  const rowsForTable = officeHeatMapData.hasOwnProperty('rowsForTable')
    ? officeHeatMapData.rowsForTable
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
  const displayOfficeData = [];
  if (zPercentGrantedsByOffice) {
    for (let years_idx = 0; years_idx < yYears.length; years_idx++) {
      let yearDataItem = [];
      for (
        let offices_idx = 0;
        offices_idx < officeCodes.length;
        offices_idx++
      ) {
        if (zPercentGrantedsByOffice.hasOwnProperty(officeCodes[offices_idx])) {
          yearDataItem.push(
            zPercentGrantedsByOffice[officeCodes[offices_idx]][years_idx]
          );
        } else {
          yearDataItem.push(0);
        }
      }
      displayOfficeData.push(yearDataItem);
    }
  }
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
            x: officeCodes,
            y: yYears,
            z: displayOfficeData,
            type: 'heatmap',
          },
        ]}
        layout={{
          height: 500,
          width: 700,
          paper_bgcolor: '#f7e4ca',
          hoverlabel: {
            bordercolor: '#f7e4ca',
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
