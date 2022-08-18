import React from 'react';
import Plot from 'react-plotly.js';

function CitizenshipMapAll(props) {
  const { query_received_data } = props;
  return (
    <div
      className="citizenship-map-all-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
        padding: '10%',
      }}
    >
      CITIZENSHIP MAP ALL
      {Object.entries(
        query_received_data.filter(
          data_item => data_item.year === 'citizenshipData'
        )[0]
      ).map(entry => {
        return (
          <div
            style={{
              backgroundColor: 'lightblue',
              minWidth: '280px',
              margin: '10% 0 10% 0',
            }}
          >
            <p>{`nation: ${entry[0]}`}</p>
            <p>{`% granted: ${entry[1]['granted']}`}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CitizenshipMapAll;
