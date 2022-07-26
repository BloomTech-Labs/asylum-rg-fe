import React from 'react';
import { connect } from 'react-redux';
import { setAsylumOfficeFilter } from '../../../state/actionCreators';
import 'antd/dist/antd.css';
import { Select, Popover } from 'antd';
import { officeRegions } from '../../../data/filterConstants';

const { Option } = Select;

const mapStateToProps = state => ({
  asylumOffice: state.fetchFilterReducer.asylumOffice,
});

const children = officeRegions.map(office => (
  <Option key={office.code}>
    <Popover
      placement="right"
      title={`${office.location.city}, ${office.location.state}`}
      content={office.regions.map(region => (
        <p key={region}>{region}</p>
      ))}
      trigger="hover"
    >
      <p style={{ textAlign: 'center' }}>
        {/* {`${office.location.city}, ${office.location.state}`} */}
        {/*To enable selection of multiple regions, replace the preceding line with the following:*/}
        {office.location.state}
      </p>
    </Popover>
  </Option>
));

const AsylumOfficeSelect = ({ asylumOffice, setAsylumOfficeFilter }) => {
  const dispatchChange = officeArray => {
    setAsylumOfficeFilter(
      typeof officeArray === 'string' ? [officeArray] : officeArray
    );
  };
  return (
    <Select
      // Uncomment the following line to allow for selection of multiple regions
      mode="multiple"
      allowClear
      style={{
        textAlign: 'center',
        width: '15em',
      }}
      placeholder="Filter By Office Region"
      defaultValue={[]}
      onChange={dispatchChange}
    >
      {children}
    </Select>
  );
};

export default connect(mapStateToProps, { setAsylumOfficeFilter })(
  AsylumOfficeSelect
);
