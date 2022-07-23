import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { columns } from '../../../data/columns';
import { connect } from 'react-redux';
import {
  filterSearch,
  resetCaseData,
  toggleAdvancedSearch,
} from '../../../state/actionCreators';
import AdvancedSearch from './AdvancedSearch';

const mapStateToProps = state => {
  return {
    cases: state.dataReducer.cases,
    filteredCases: state.dataReducer.filteredCases,
    filterCount: state.dataReducer.filterCount,
    displayAdvancedSearch: state.dataReducer.displayAdvancedSearch,
  };
};

function SearchBar(props) {
  const {
    cases,
    filteredCases,
    filterCount,
    filterSearch,
    resetCaseData,
    displayAdvancedSearch,
    toggleAdvancedSearch,
  } = props;

  const { Option } = Select;
  const [form] = Form.useForm();

  function onCategoryChange(value) {
    form.setFieldsValue({ category: value });
  }

  function onSubmit(values) {
    const { searchTerm, category } = values;
    const data = filterCount === 0 ? cases : filteredCases;

    filterSearch({ data, searchTerm, category });
    form.resetFields();
  }

  function reset() {
    resetCaseData();
    form.resetFields();
  }

  function showAdvancedSearch() {
    toggleAdvancedSearch(displayAdvancedSearch);
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Button onClick={showAdvancedSearch}>
          {displayAdvancedSearch ? 'Use Basic Search' : 'Use Advanced Search'}
        </Button>
      </div>

      <Form
        form={form}
        name="searchBar"
        onFinish={onSubmit}
        autoComplete="off"
        layout="inline"
        wrapperCol={{ span: 45 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'start',
        }}
      >
        {/* Basic Search(will move to another component) */}

        <Form.Item
          label="Search Term"
          name="searchTerm"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true }]}
        >
          <Select placeholder="Pick A Category" onChange={onCategoryChange}>
            {columns.map((column, index) => (
              <Option value={column.dataIndex} key={index}>
                {column.title}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Filter By Term🔎
          </Button>
          <Button htmlType="button" onClick={reset}>
            Reset Term Filter
          </Button>
        </Form.Item>
      </Form>
      {displayAdvancedSearch ? <AdvancedSearch /> : null}
    </>
  );
}

export default connect(mapStateToProps, {
  filterSearch,
  resetCaseData,
  toggleAdvancedSearch,
})(SearchBar);
