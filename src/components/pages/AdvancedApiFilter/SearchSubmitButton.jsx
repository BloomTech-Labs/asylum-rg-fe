import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
  getFilteredData,
  getMockFilteredData,
} from '../../../state/actionCreators';
import { buildQueryString } from '../../../state/reducers/fetchFilterReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    filters: state.fetchFilterReducer,
  };
};

function SearchSubmitButton({ filters, getFilteredData, getMockFilteredData }) {
  return (
    //A slice of state should be added to the redux store to indicated loading
    //Loading animation can be managed within the button component, though an
    //app-wide loading indicator would be less work and more consistent
    //See if somebody can use d3 to make an svg grouping of the HRF logo and
    //Animate it with d3 awesome transition powers
    <Button
      type="primary"
      icon={<SearchOutlined />}
      onClick={() => getMockFilteredData(buildQueryString(filters))}
    >
      Search
    </Button>
  );
}

export default connect(mapStateToProps, {
  getFilteredData,
  getMockFilteredData,
})(SearchSubmitButton);
