import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import AllOfficesRoute from './AllOfficesRoute';
import SingleOfficeRoute from './SingleOfficeRoute';

import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

function HeatMapContainer() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'rgb(247,228,202)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        HEAT MAP CONTAINER
        <Link to="all">All</Link>
        <Switch>
          <Route path="all/:view" element={<AllOfficesRoute />} />
          <Route path=":office/:view" element={<SingleOfficeRoute />} />
        </Switch>
      </div>
    </div>
  );
}

export default HeatMapContainer;
