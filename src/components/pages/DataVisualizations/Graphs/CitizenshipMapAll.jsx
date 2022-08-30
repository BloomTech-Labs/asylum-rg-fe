import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import Table from './TableComponents/Table';
import { colors } from '../../../../styles/data_vis_colors';

const { background_color, primary_accent_color, secondary_accent_color } = colors;

const mapStateToProps = state => {
  return {
    citizenshipMapAllData: state.vizReducer.citizenshipMapAllData,
  };
};

function CitizenshipMapAll(props) {
  const { citizenshipMapAllData } = props;
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
      }}
    >
      <p>
        Showing: Rates of 'granted' case decision by nationality of origin, for
        all offices
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
          paper_bgcolor: background_color,
          hoverlabel: {
            bordercolor: primary_accent_color,
          },
          geo: {
            scope: geoScope,
          },
          height: 500,
          width: 700,
        }}
        style={{
          width: '100%',
          fontWeight: '900',
          backgroundColor: background_color,
        }}
      />
      <label htmlFor="regionSelect">Select another region below</label>
      <select name="regionSelect" onChange={handleScopeChange}>
        {geoScopeArray.map(a => {
          return <option value={a}>{a.toUpperCase()}</option>;
        })}
      </select>
      <p>Table view</p>
      <Table
        bordered={true}
        rows={rowsForTable}
        columns={columnsForTable}
        tableWidth={'100%'}
        rowHeight={'50px'}
        scroll={{ y: 550 }}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 25,
        }}
      />
    </div>
  );
}

export default connect(mapStateToProps)(CitizenshipMapAll);