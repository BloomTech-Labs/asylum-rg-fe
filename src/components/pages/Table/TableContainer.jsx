import React, { useEffect, useCallback } from 'react';
import DataTable from './DataTable';

import { connect } from 'react-redux';
import {
  getFilteredData,
  getMockFilteredData,
} from '../../../state/actionCreators';

const mapStateToProps = state => ({
  cases: state.dataReducer.cases,
});

const TableContainer = ({ cases, getFilteredData, getMockFilteredData }) => {
  /*As JavaScript treats functions like first class objects, when it rerenders it
  creates a new instance of the function it is destructuring from props. And when
  React checks whether one instance is the same as another, it will always return
  false because they are different instances. This triggers a rerender, and thereby
  an infinite loop. Using the useCallback hook allows use to memoize the callback
  and thereby not trigger that rerendering. Fun!*/
  const memoizedGetFilteredData = useCallback(() => {
    //Swap use of the next two function calls and switch the dependency array accordingly
    //to revert to using the api rather than mock data generation:
    //getFilteredData('?');
    getMockFilteredData('?');
  }, [getMockFilteredData]);

  useEffect(() => {
    memoizedGetFilteredData();
  }, [memoizedGetFilteredData]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          backgroundColor: '#f7e4ca',
        }}
      >
        <DataTable />
      </div>
    </>
  );
};

export default connect(mapStateToProps, {
  getFilteredData,
  getMockFilteredData,
})(TableContainer);
