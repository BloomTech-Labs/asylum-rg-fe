import React from 'react';
import MapWrapper from './MapWrapper';
import 'antd/dist/antd.css';

function AllOfficesRoute(props) {
  const { set_view } = props;
  return (
    <div className="all-offices-route">
      <MapWrapper set_view={set_view} />
    </div>
  );
}
//test
export default AllOfficesRoute;
