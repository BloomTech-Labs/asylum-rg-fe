import React from 'react';
import YearLimitsSlider from './YearLimitsSlider';
import { Form, Button, Input } from 'antd';
import {
  setVisualizationData,
  setHeatMapYears,
} from '../../../state/actionCreators';

import Redux from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const { view, office } = ownProps;
  if (office === 'all' || !office) {
    switch (view) {
      case 'time-series':
        return {
          years: state.vizReducer.timeSeriesAllYears,
        };
      case 'office-heat-map':
        return {
          years: state.vizReducer.officeHeatMapYears,
        };
      case 'citizenship':
        return {
          years: state.vizReducer.citizenshipMapAllYears,
        };
      default:
        return {
          years: ['', ''],
        };
    }
  } else {
    switch (view) {
      case 'time-series':
        return {
          years: state.vizReducer.offices[office].timeSeriesYears,
        };
      case 'citizenship':
        return {
          years: state.vizReducer.offices[office].citizenshipMapYears,
        };
      default:
        return {
          years: ['', ''],
        };
    }
  }
};

function YearLimitsSelect(props) {
  console.log('YEARS:');
  console.log(props.years);
  const { view, office, dispatch, updateStateWithNewData, years } = props;
  const yearInputsOnChange = (view, office, e) =>
    dispatch(
      setHeatMapYears(
        view,
        office,
        e.target.id.includes('year_start') ? 0 : 1,
        e.target.value
      )
    );
  const stateSettingFn = (view, office, data) =>
    dispatch(setVisualizationData(view, office, data));
  const [form] = Form.useForm();
  return (
    <div
      className="year-limits-select-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50px',
      }}
    >
      <YearLimitsSlider />
      <Form
        form={form}
        name="yearLimitsSelect"
        initialValues={{ year_start: years[0], year_end: years[1] }}
        onFinish={() => updateStateWithNewData(view, office, stateSettingFn)}
        autoComplete="off"
        layout="inline"
        wrapperCol={{ span: 45 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'start',
        }}
      >
        <Form.Item
          label="From:"
          name="year_start"
          rules={[
            { required: true },
            {
              validator: (_, value) => {
                return value &&
                  parseInt(value) == value &&
                  value >= 2015 &&
                  value <= 2022
                  ? Promise.resolve()
                  : Promise.reject(
                      'Please enter a year between 2015 and 2022.'
                    );
              },
            },
          ]}
          onChange={e => yearInputsOnChange(view, office, e)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="To:"
          name="year_end"
          rules={[
            { required: true },
            {
              validator: (_, value) => {
                return value &&
                  parseInt(value) == value &&
                  value >= 2015 &&
                  value <= 2022
                  ? Promise.resolve()
                  : Promise.reject(
                      'Please enter a year between 2015 and 2022.'
                    );
              },
            },
          ]}
          onChange={e => yearInputsOnChange(view, office, e)}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" data-testid="filter">
            Update Query
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default connect(mapStateToProps)(YearLimitsSelect);
