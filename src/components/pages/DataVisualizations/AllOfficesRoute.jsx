import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';

import TimeSeriesAll from './HeatMaps/TimeSeriesAll';
import OfficeHeatMap from './HeatMaps/OfficeHeatMap';
import CitizenshipMapAll from './HeatMaps/CitizenshipMapAll';

import ViewSelect from './ViewSelect';

import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

function AllOfficesRoute() {
  return (
    <div className="all-offices-route">
      ALL OFFICES
      <ViewSelect />
      <Switch>
        <Route path="/heatmap/all/citizenship" component={CitizenshipMapAll} />
        <Route path="/heatmap/all/office-heat-map" component={OfficeHeatMap} />
        <Route path="/heatmap/all/time-series" component={TimeSeriesAll} />
      </Switch>
    </div>
  );
}

export default AllOfficesRoute;
