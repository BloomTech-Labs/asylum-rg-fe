import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';

import CitizenshipMapSingleOffice from './HeatMaps/CitizenshipMapAll';
import TimeSeriesSingleOffice from './HeatMaps/TimeSeriesSingleOffice';
import ViewSelect from './ViewSelect';

import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

function SingleOfficeRoute() {
  let { office } = useParams();
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
      {office}
      <ViewSelect />
      <Switch>
        <Route
          path="/heatmap/:office/citizenship"
          component={CitizenshipMapSingleOffice}
        />
        <Route
          path="/heatmap/:office/time-series"
          component={TimeSeriesSingleOffice}
        />
      </Switch>
    </div>
  );
}

export default SingleOfficeRoute;
