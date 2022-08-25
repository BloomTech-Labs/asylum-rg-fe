import React from 'react';
import { Table } from 'antd';
import { columns } from '../../../../data/columns';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const mapStateToProps = state => {
  return {
    cases: state.dataReducer.cases,
    filteredCases: state.dataReducer.filteredCases,
    filterCount: state.dataReducer.filterCount,
  };
};

function DataTable(props) {
  const { cases, filterCount, filteredCases } = props;
  return (
    <div>
      <SearchBar />
      <Table
        style={{
          margin: '5rem',
        }}
        bordered={true}
        loading={cases.length === 0 ? true : false}
        columns={columns}
        dataSource={
          filterCount === 0
            ? cases.map((record, index) => ({ ...record, key: index }))
            : filteredCases.map((record, index) => ({ ...record, key: index }))
        }
        scroll={{ y: 550 }}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 25,
        }}
        title={() => 'Tabular View'}
      />
    </div>
  );
}

export default connect(mapStateToProps)(DataTable);
