import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ViewSelect(props) {
  const { setView } = props;
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
      <button onClick={() => setView('time-series')}>Time Series</button>
      {office ? (
        ''
      ) : (
        <button onClick={() => setView('office-heat-map')}>
          Office Heat Map
        </button>
      )}
      <button onClick={() => setView('citizenship')}>Citizenship</button>
    </div>
  );
}

export default ViewSelect;
