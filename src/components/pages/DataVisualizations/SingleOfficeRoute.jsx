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
    <div className="single-office-route">
      <ViewSelect />
      <Switch>
        <Route path="citizenship" element={<CitizenshipMapSingleOffice />} />
        <Route path="time-series" element={<TimeSeriesSingleOffice />} />
      </Switch>
    </div>
  );
}

export default SingleOfficeRoute;
