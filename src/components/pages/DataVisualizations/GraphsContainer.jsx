import React, { useState } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import AllOfficesRoute from './AllOfficesRoute';
import SingleOfficeRoute from './SingleOfficeRoute';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { colors } from '../../../styles/data_vis_colors';

const { Option } = Select;
const { background_color } = colors;

function GraphsContainer() {
  const [view, set_view] = useState('time-series');
  const history = useHistory();
  const offices = [
    'All',
    'ZLA', //Los Angeles, CA
    'ZSF', //San Francisco, CA
    'ZNY', //New York, NY
    'ZHN', //Houston, TX
    'ZCH', //Chicago, IL
    'ZNK', //Newark, NJ
    'ZAR', //Arlington, VA
    'ZBO', //Boston, MA
    'ZMI', //Miami, FL
    'ZOL', //New Orleans, LA
  ];
  function handle_office_select(value) {
    if (view === 'office-heat-map') {
      set_view('time-series');
    }
    if (value === 'All') {
      history.push(
        `/graphs/all/${view === 'office-heat-map' ? 'time-series' : view}`
      );
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
        backgroundColor: background_color,
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
            justifyContent: 'right',
            marginRight: '17.4%',
            height: '10vh',
            alignItems: 'center',
          }}
        >
          <Select
            defaultValue={offices[0]}
            onSelect={value => handle_office_select(value)}
          >
            {offices.map((office, idx) =>
              office === 'All' ? (
                <Option key={idx} value={'all'}>
                  {office}
                </Option>
              ) : (
                <Option key={idx} value={office}>
                  {office}
                </Option>
              )
            )}
          </Select>
        </div>
        <Switch>
          <Route
            exact
            path="/graphs/"
            component={() => AllOfficesRoute({ set_view })}
          />
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

export default GraphsContainer;
