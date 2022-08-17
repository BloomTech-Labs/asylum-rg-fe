import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import AllOfficesRoute from './AllOfficesRoute';
import SingleOfficeRoute from './SingleOfficeRoute';

import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

function HeatMapContainer() {
  const offices = [
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
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'rgb(247,228,202)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        HEAT MAP CONTAINER
        <Link to="/heatmap/all/time-series">All</Link>
        {offices.map(office => (
          <Link to={`/heatmap/${office}/time-series`}>{office}</Link>
        ))}
        <Switch>
          <Route path="/heatmap/all/:view" component={AllOfficesRoute} />
          <Route path="/heatmap/:office/:view" component={SingleOfficeRoute} />
        </Switch>
      </div>
    </div>
  );
}

export default HeatMapContainer;
