import React from 'react';

function TimeSeriesAll(props) {
  const { query_received_data } = props;
  return (
    <div
      className="time-series-all-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px',
        backgroundColor: 'rgb(200,200,100)',
        justifyContent: 'center',
        padding: '10%',
      }}
    >
      TIME SERIES ALL
      {query_received_data
        .filter(data_item => data_item.year !== 'citizenshipData')
        .map(data_item => {
          return (
            <div
              style={{
                backgroundColor: 'lightblue',
                minWidth: '280px',
                margin: '10% 0 10% 0',
              }}
            >
              <p>{`year: ${data_item.year}`}</p>
              <p>{`%  accepted: ${data_item.granted}`}</p>
            </div>
          );
        })}
    </div>
  );
}

export default TimeSeriesAll;
