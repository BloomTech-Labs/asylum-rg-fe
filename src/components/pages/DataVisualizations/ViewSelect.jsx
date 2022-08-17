import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ViewSelect() {
  let { office } = useParams;
  return (
    <div className="view-select-container">
      VIEW SELECT
      <Link to="time-series">Time Series</Link>
      office==='all'?<Link to="officexyear">Office x Year</Link>:''
      <Link to="citizenship">Citizenship</Link>
    </div>
  );
}

export default ViewSelect;
