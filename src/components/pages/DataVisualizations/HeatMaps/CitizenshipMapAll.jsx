import React from 'react';
import Plot from 'react-plotly.js';

import Redux from 'redux';
import { connect } from 'react-redux';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';
import Table from './TableComponents/Table';

const mapStateToProps = state => {
  return {
    citizenshipMapAllData: state.vizReducer.citizenshipMapAllData,
  };
};

function CitizenshipMapAll(props) {
  const { citizenshipMapAllData } = props;
  const countries = citizenshipMapAllData.hasOwnProperty('countries')
    ? citizenshipMapAllData.countries
    : [];
  const countriesTotals = citizenshipMapAllData.hasOwnProperty(
    'countriesTotals'
  )
    ? citizenshipMapAllData.countriesTotals
    : [];
  const countriesPercentGranteds = citizenshipMapAllData.hasOwnProperty(
    'countriesPercentGranteds'
  )
    ? citizenshipMapAllData.countriesPercentGranteds
    : [];
  const countriesPercentAdminCloseds = citizenshipMapAllData.hasOwnProperty(
    'countriesPercentAdminCloseds'
  )
    ? citizenshipMapAllData.countriesPercentAdminCloseds
    : [];
  const countriesPercentDenieds = citizenshipMapAllData.hasOwnProperty(
    'countriesPercentDenieds'
  )
    ? citizenshipMapAllData.countriesPercentDenieds
    : [];
  const rowsForTable = citizenshipMapAllData.hasOwnProperty('rowsForTable')
    ? citizenshipMapAllData.rowsForTable
    : [];
  const columnsForTable = [
    'Citizenship',
    'Total Cases',
    '% Granted',
    '% Admin Close / Dismissal',
    '% Denied',
  ];
  return (
    <div
      className="citizenship-map-all-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
        padding: '10%',
      }}
    >
      <p>CITIZENSHIP MAP ALL</p>
      <Plot
        data={[
          {
            type: 'choropleth',
            locationmode: 'country names',
            locations: countries,
            z: countriesPercentGranteds,
            text: countries,
            autocolorscale: true,
          },
        ]}
        layout={{
          paper_bgcolor: '#f7e4ca',
          hoverlabel: {
            bordercolor: '#f7e4ca',
          },
          geo: {
            scope: 'USA',
            projection: {
              type: 'robinson',
            },
          },
          height: 400,
          width: 400,
        }}
        style={{
          width: '100%',
          fontWeight: '900',
        }}
      />
      <Table
        rows={rowsForTable}
        columns={columnsForTable}
        tableWidth={'100%'}
        rowHeight={'50px'}
      />
    </div>
  );
}

export default connect(mapStateToProps)(CitizenshipMapAll);
