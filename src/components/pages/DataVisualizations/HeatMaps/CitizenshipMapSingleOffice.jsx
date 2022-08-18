import React from 'react';
import { useParams } from 'react-router-dom';

function CitizenshipMapSingleOffice(props) {
  const { query_received_data } = props;
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

export default CitizenshipMapSingleOffice;
