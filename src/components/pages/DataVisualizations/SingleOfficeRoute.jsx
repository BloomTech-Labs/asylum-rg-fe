import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';

import CitizenshipMapSingleOffice from './HeatMaps/CitizenshipMapAll';
import TimeSeriesSingleOffice from './HeatMaps/TimeSeriesSingleOffice';
import ViewSelect from './ViewSelect';
import MapWrapper from './MapWrapper';

import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

function SingleOfficeRoute(props) {
  const { set_view } = props;
  let { office, view } = useParams();
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
      <MapWrapper set_view={set_view} />
    </div>
  );
}

export default SingleOfficeRoute;
