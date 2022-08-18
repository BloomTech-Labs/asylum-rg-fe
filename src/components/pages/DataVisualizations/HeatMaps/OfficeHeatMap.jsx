import React from 'react';

function OfficeHeatMap(props) {
  const { query_received_data } = props;
  return (
    <div
      className="office-heat-map-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'lightgray',
        minHeight: '100px',
        justifyContent: 'center',
        color: 'white',
        padding: '10%',
      }}
    >
      OFFICE HEAT MAP
      {query_received_data
        .filter(data_item => data_item.year !== 'citizenshipData')
        .map(data_item => {
          return (
            <div>
              <p>{`year: ${data_item.year}`}</p>
              {data_item.yearData.map(office => {
                return (
                  <div
                    style={{
                      backgroundColor: 'lightblue',
                      minWidth: '280px',
                      margin: '10% 0 10% 0',
                    }}
                  >
                    <p>{`office: ${office.office}`}</p>
                    <p>{`%  accepted: ${office.granted}`}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

export default OfficeHeatMap;
