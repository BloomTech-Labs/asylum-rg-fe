import React from 'react';
import YearLimitsSlider from './YearLimitsSlider';
import { Form, Button, Input } from 'antd';

function YearLimitsSelect() {
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
        onFinish={() => {}}
        autoComplete="off"
        layout="inline"
        wrapperCol={{ span: 45 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'start',
        }}
      >
        <Form.Item label="From:" name="year_start" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="To:" name="year_end" rules={[{ required: true }]}>
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

export default YearLimitsSelect;
