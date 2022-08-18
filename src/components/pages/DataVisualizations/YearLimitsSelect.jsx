import React from 'react';
import YearLimitsSlider from './YearLimitsSlider';

function YearLimitsSelect() {
  return (
    <div
      className="year-limits-select-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50px',
      }}
    >
      <YearLimitsSlider />
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        From:
        <input name="year-start" type="text" />
      </label>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        To:
        <input name="year-end" type="text" />
      </label>
      <button
        style={{
          backgroundColor: 'rgb(150,100,180)',
          border: '1px solid white',
          borderRadius: '10px',
        }}
      >
        UPDATE QUERY
      </button>
    </div>
  );
}

export default YearLimitsSelect;
