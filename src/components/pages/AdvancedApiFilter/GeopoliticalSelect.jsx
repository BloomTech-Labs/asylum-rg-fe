import React from 'react';
import { connect } from 'react-redux';
import { setGeopoliticalFilter } from '../../../state/actionCreators';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { geopoliticalEnum } from '../../../data/filterConstants';
const { Option } = Select;

const mapStateToProps = state => ({
  geopolitical: state.fetchFilterReducer.geopolitical,
});

const geopoliticalOptions = Object.values(geopoliticalEnum).map(
  geopolitical => <Option key={geopolitical}>{geopolitical}</Option>
);

const GeopoliticalSelect = ({ geopolitical, setGeopoliticalFilter }) => {
  const dispatchChange = geopoliticalArray => {
    setGeopoliticalFilter(
      typeof geopoliticalArray === 'string'
        ? [geopoliticalArray]
        : geopoliticalArray
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
      placeholder="Filter By Geopolitical Region"
      defaultValue={[]}
      onChange={dispatchChange}
    >
      {geopoliticalOptions}
    </Select>
  );
};

export default connect(mapStateToProps, { setGeopoliticalFilter })(
  GeopoliticalSelect
);
