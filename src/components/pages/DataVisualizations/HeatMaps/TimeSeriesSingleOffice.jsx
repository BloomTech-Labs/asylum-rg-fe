import React from 'react';
import { useParams } from 'react-router-dom';

function TimeSeriesSingleOffice() {
  const { office } = useParams();
  return (
    <div
      className="time-series-single-office-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100px',
        backgroundColor: 'lightgreen',
        padding: '10%',
      }}
    >
      TIME SERIES {office}
    </div>
  );
}

export default TimeSeriesSingleOffice;
