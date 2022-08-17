import React from 'react';
import CitizenshipMapAll from './HeatMaps/CitizenshipMapAll';
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
        <Select
          style={{
            textAlign: 'center',
            width: '15em',
            marginTop: '5vh',
          }}
          placeholder="Filter By Office Region"
          defaultValue={'all'}
        >
          {/* Ultimately, as the data shape is better known, these should be dynamically created */}
          <Option value={'all'}>Data for Office: All</Option>
          <Option value={2021}>Data for Office: </Option>
          <Option value={2020}>Display Year: 2020</Option>
          <Option value={2019}>Display Year: 2019</Option>
          <Option value={2018}>Display Year: 2018</Option>
        </Select>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#f7e4ca',
        }}
      >
        <CitizenshipMapAll />
      </div>
    </div>
  );
}

export default HeatMapContainer;
