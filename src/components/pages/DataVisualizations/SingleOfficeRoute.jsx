import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';

import CitizenshipMapSingleOffice from './HeatMaps/CitizenshipMapAll';
import TimeSeriesSingleOffice from './HeatMaps/TimeSeriesSingleOffice';
import ViewSelect from './ViewSelect';

import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

function SingleOfficeRoute() {
  return (
    <div
      className="single-office-route"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'lightgreen',
      }}
    >
      <ViewSelect />
      <Switch>
        <Route path="citizenship" component={CitizenshipMapSingleOffice} />
        <Route path="time-series" component={TimeSeriesSingleOffice} />
      </Switch>
    </div>
  );
}

export default SingleOfficeRoute;
