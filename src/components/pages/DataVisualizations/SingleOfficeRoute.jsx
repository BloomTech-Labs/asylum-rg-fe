import React from 'react';
import MapWrapper from './MapWrapper';
import 'antd/dist/antd.css';

function SingleOfficeRoute(props) {
  const { set_view } = props;
  return (
    <div
      className="single-office-route"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'lightgreen',
      }}
    >
      <MapWrapper set_view={set_view} />
    </div>
  );
}

export default SingleOfficeRoute;
