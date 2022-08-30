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
  function handle_office_select(value) {
    if (view === 'office-heat-map') {
      set_view('time-series');
    }
    history.push(
      `/graphs/${value}/${view === 'office-heat-map' ? 'time-series' : view}`
    );
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
        <div
          className="heatmaps-main-nav-container"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Link to={`/graphs/all/${view}`}>All</Link>
          <Select
            defaultValue={offices[0]}
            onSelect={value => handle_office_select(value)}
          >
            {offices.map((office, idx) => (
              <Option key={idx} value={office}>
                {office}
              </Option>
            ))}
          </Select>
        </div>
        <Switch>
          <Route
            path="/graphs/all/:view"
            component={() => AllOfficesRoute({ set_view })}
          />
          <Route
            path="/graphs/:office/:view"
            component={() => SingleOfficeRoute({ set_view })}
          />
        </Switch>
      </div>
    </div>
  );
}

export default HeatMapContainer;
