import React from 'react';

function Tick(props) {
  const { value } = props;
  return (
    <div
      className="vertical-bar-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          borderRight: '3px solid green',
          height: '200px',
          width: '0px',
        }}
      ></div>
      <p
        style={{
          lineHeight: '0px',
          height: '0px',
          width: '0px',
          transform: 'translateX(-10px)',
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default Tick;
