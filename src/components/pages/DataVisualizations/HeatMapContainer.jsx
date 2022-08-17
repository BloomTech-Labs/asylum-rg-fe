import React, { useState } from 'react';
import { useHistory, Switch, Route, Link } from 'react-router-dom';

import AllOfficesRoute from './AllOfficesRoute';
import SingleOfficeRoute from './SingleOfficeRoute';

import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

function HeatMapContainer() {
  const [view, set_view] = useState('time-series');
  const history = useHistory();
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
  function handle_office_select(e) {
    history.push(`/heatmap/${e.target.value}/${view}`);
  }
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
        <Link to={`/heatmap/all/${view}`}>All</Link>
        <select className="office-select" onChange={handle_office_select}>
          {offices.map((office, idx) => (
            <option key={idx} value={office}>
              {office}
            </option>
          ))}
        </select>
        <Switch>
          <Route
            path="/heatmap/all/:view"
            component={() => AllOfficesRoute({ set_view })}
          />
          <Route
            path="/heatmap/:office/:view"
            component={() => SingleOfficeRoute({ set_view })}
          />
        </Switch>
      </div>
    </div>
  );
}

export default HeatMapContainer;
