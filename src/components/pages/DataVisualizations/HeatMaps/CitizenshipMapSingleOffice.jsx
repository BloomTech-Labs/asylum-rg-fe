import React from 'react';
import { useParams } from 'react-router-dom';

function CitizenshipMapSingleOffice() {
  const { office } = useParams();
  return (
    <div
      className="citizenship-map-single-office-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: 'rgb(220,150,150)',
        padding: '10%',
      }}
    >
      CITIZENSHIP MAP {office}
    </div>
  );
}

export default CitizenshipMapSingleOffice;
