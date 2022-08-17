import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ViewSelect() {
  let { office } = useParams();
  return (
    <div
      className="view-select-container"
      style={{
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
      }}
    >
      VIEW SELECT
      <Link to={`/heatmap/${office ? office : 'all'}/time-series`}>
        Time Series
      </Link>
      {office ? '' : <Link to={`/heatmap/all/officexyear`}>Office x Year</Link>}
      <Link to={`/heatmap/${office ? office : 'all'}/citizenship`}>
        Citizenship
      </Link>
    </div>
  );
}

export default ViewSelect;
