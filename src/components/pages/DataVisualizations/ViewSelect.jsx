import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

function ViewSelect(props) {
  const history = useHistory();
  const { set_view } = props;
  let { office } = useParams();
  function update_view(view, office) {
    set_view(view);
    history.push(`/heatmap/${office ? office : 'all'}/${view}`);
  }
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
      <button onClick={() => update_view('time-series', office)}>
        Time Series
      </button>
      {office ? (
        ''
      ) : (
        <button onClick={() => update_view('office-heat-map', office)}>
          Office Heat Map
        </button>
      )}
      <button onClick={() => update_view('citizenship', office)}>
        Citizenship
      </button>
    </div>
  );
}

export default ViewSelect;
