import React, { useState } from 'react';
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
  const geoScopeArray = [
    'world',
    'usa',
    'europe',
    'asia',
    'africa',
    'north america',
    'south america',
  ];
  const [geoScope, setGeoScope] = useState('world');
  const handleScopeChange = e => {
    //update Plotly region based on dropdown selection
    const { value } = e.target;
    setGeoScope(value);
  };
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
      <p>
        Showing: Rates of 'granted' case decision by nationality of origin, for{' '}
        {office}
      </p>
      <Plot
        data={[
          {
            type: 'choropleth',
            locationmode: 'country names',
            locations: countries,
            z: countriesPercentGranteds,
            text: countries,
            colorscale: [
              [0, 'rgb(255,78,17)'],
              [0.5, 'rgb(250,183,51)'],
              [1, 'rgb(105,179,76)'],
            ],
            colorbar: {
              title: 'Grant %',
            },
          },
        ]}
        layout={{
          title: 'Grant Percentage by Citizenship',
          paper_bgcolor: '#f7e4ca',
          hoverlabel: {
            bordercolor: '#f7e4ca',
          },
          geo: {
            scope: geoScope,
          },
          height: 500,
          width: 700,
        }}
        style={{ width: '100%', fontWeight: '900' }}
      />
      <label for="regionSelect">Select another region below</label>
      <select name="regionSelect" onChange={handleScopeChange}>
        {geoScopeArray.map(a => {
          return <option value={a}>{a.toUpperCase()}</option>;
        })}
      </select>
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
