import React from 'react';
import { useParams } from 'react-router-dom';

function TimeSeriesSingleOffice(props) {
  const { query_received_data } = props;
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

export default TimeSeriesSingleOffice;
