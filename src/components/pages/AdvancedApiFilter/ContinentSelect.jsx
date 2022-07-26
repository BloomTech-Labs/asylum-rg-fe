import React from 'react';
import { connect } from 'react-redux';
import { setContinentFilter } from '../../../state/actionCreators';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { continentEnum } from '../../../data/filterConstants';
const { Option } = Select;

const mapStateToProps = state => ({
  continents: state.fetchFilterReducer.continents,
});

const continentOptions = Object.values(continentEnum).map(continent => (
  <Option key={continent}>{continent}</Option>
));

const ContinentSelect = ({ continents, setContinentFilter }) => {
  const dispatchChange = continentArray => {
    setContinentFilter(
      typeof continentArray === 'string' ? [continentArray] : continentArray
    );
  };
  return (
    <Select
      mode="multiple"
      allowClear
      style={{
        textAlign: 'center',
        width: '15em',
      }}
      placeholder="Filter By Continent"
      defaultValue={[]}
      onChange={dispatchChange}
    >
      {continentOptions}
    </Select>
  );
};

export default connect(mapStateToProps, { setContinentFilter })(
  ContinentSelect
);
