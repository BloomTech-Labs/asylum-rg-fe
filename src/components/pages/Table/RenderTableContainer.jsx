import React, { useEffect } from 'react';
import { Table } from 'antd';
import { data } from '../../../data/data';
import { columns } from '../../../data/columns';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getAllData } from '../../../state/actions';
import SearchBar from './SearchBar/SearchBar';

const useStyles = makeStyles({
  container: {
    margin: '5rem',
  },
});

//data will come in as props and not be hard coded
function RenderTablePage(props) {
  const { asylum, getAllData, filteredCount, filteredData } = props;

  const classes = useStyles();

  useEffect(() => {
    getAllData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SearchBar />
      <Table
        className={classes.container}
        bordered={true}
        loading={asylum.length === 0 ? true : false}
        columns={columns}
        dataSource={filteredCount === 0 ? asylum : filteredData}
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

const mapStateToProps = state => {
  const filteredReducer = state.filterReducer;

  return {
    asylum: state.dataReducer,
    filteredData: filteredReducer.data,
    filteredCount: filteredReducer.count,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllData: () => {
//       dispatch(getAllData(data));
//     },
//   };
// };

export default connect(mapStateToProps, { getAllData })(RenderTablePage);
