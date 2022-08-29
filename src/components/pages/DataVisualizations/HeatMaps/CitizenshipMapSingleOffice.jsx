import React from 'react';
import { useParams } from 'react-router-dom';

import Redux from 'redux';
import { connect } from 'react-redux';

import Plot from 'react-plotly.js';

import reducer from '../../../../state/reducers';
import { SET_VISUALIZATION_DATA } from '../../../../state/actionTypes';
import Table from './TableComponents/Table';

const mapStateToProps = (state, ownProps) => {
  const { office } = ownProps;
  return {
    citizenshipMapData: state.vizReducer.offices[office].citizenshipMapData,
  };
};

function CitizenshipMapSingleOffice(props) {
  const { office, citizenshipMapData } = props;
  const countries = citizenshipMapData.hasOwnProperty('countries')
    ? citizenshipMapData.countries
    : [];
  const countriesTotals = citizenshipMapData.hasOwnProperty('countriesTotals')
    ? citizenshipMapData.countriesTotals
    : [];
  const countriesPercentGranteds = citizenshipMapData.hasOwnProperty(
    'countriesPercentGranteds'
  )
    ? citizenshipMapData.countriesPercentGranteds
    : [];
  const countriesPercentAdminCloseds = citizenshipMapData.hasOwnProperty(
    'countriesPercentAdminCloseds'
  )
    ? citizenshipMapData.countriesPercentAdminCloseds
    : [];
  const countriesPercentDenieds = citizenshipMapData.hasOwnProperty(
    'countriesPercentDenieds'
  )
    ? citizenshipMapData.countriesPercentDenieds
    : [];
  const rowsForTable = citizenshipMapData.hasOwnProperty('rowsForTable')
    ? citizenshipMapData.rowsForTable
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
      className="citizenship-map-single-office-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100px',
        justifyContent: 'center',
      }}
    >
      <p>Showing: Rates of 'granted' case decision by nationality of origin, for {office}</p>
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
            scope: 'world',
            projection: {
              type: 'robinson',
            },
          },
          height: 500,
          width: 700,
        }}
        style={{ width: '100%', fontWeight: '900' }}
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

export default connect(mapStateToProps)(CitizenshipMapSingleOffice);
