import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';

import TimeSeriesAll from './HeatMaps/TimeSeriesAll';
import OfficeHeatMap from './HeatMaps/OfficeHeatMap';
import CitizenshipMapAll from './HeatMaps/CitizenshipMapAll';
import MapWrapper from './MapWrapper';

import ViewSelect from './ViewSelect';

import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

function AllOfficesRoute(props) {
  const { set_view } = props;
  return (
    <div className="all-offices-route">
      ALL OFFICES
      <MapWrapper set_view={set_view} />
    </div>
  );
}

export default AllOfficesRoute;
