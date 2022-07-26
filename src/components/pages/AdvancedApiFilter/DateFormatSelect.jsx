import React from 'react';
import { connect } from 'react-redux';
import { setDateFilterFormat } from '../../../state/actionCreators';
import 'antd/dist/antd.css';
import { Select } from 'antd';
// import '../../../styles/FilterMenuStyles/DateFormatSelect.less';
//If the rounded Select design as shown at https://github.com/BloomTech-Labs/asylum-rg-docs/blob/main/Designs/UIMockup/UiMockup.pdf is decided upon, uncomment the line above
const { Option } = Select;

const mapStateToProps = state => ({
  isFiscalYear: state.fetchFilterReducer.isFiscalYear,
});

const DateFormatSelect = ({ isFiscalYear, setDateFilterFormat }) => (
  <Select
    //If the rounded Select design as shown at https://github.com/BloomTech-Labs/asylum-rg-docs/blob/main/Designs/UIMockup/UiMockup.pdf is decided upon, uncomment the following line
    // bordered={false}
    value={isFiscalYear ? 'fiscalYear' : 'calendarYear'}
    onChange={() => setDateFilterFormat(!isFiscalYear)}
  >
    <Option value="calendarYear">Calendar Year</Option>
    <Option value="fiscalYear">Fiscal Year</Option>
  </Select>
);

export default connect(mapStateToProps, { setDateFilterFormat })(
  DateFormatSelect
);
