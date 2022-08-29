import React, { useState, useRef, useEffect } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import Tick from './Tick';
import Thumb from './Thumb';
import { useInterval } from '../../../../utils';
import { setHeatMapYears } from '../../../../state/actionCreators';

/* '[the useRef hook makes it possible to acces DOM nodes
    from within functional components' -Codevolution tutorial */
const mapStateToProps = (state, ownProps) => {
  const { view, office } = ownProps;
  if (office === 'all' || !office) {
    switch (view) {
      case 'time-series':
        return {
          years: state.vizReducer.timeSeriesAllYears,
        };
      case 'office-heat-map':
        return {
          years: state.vizReducer.officeHeatMapYears,
        };
      case 'citizenship':
        return {
          years: state.vizReducer.citizenshipMapAllYears,
        };
      default:
        return {
          years: ['', ''],
        };
    }
  } else {
    switch (view) {
      case 'time-series':
        return {
          years: state.vizReducer.offices[office].timeSeriesYears,
        };
      case 'citizenship':
        return {
          years: state.vizReducer.offices[office].citizenshipMapYears,
        };
      default:
        return {
          years: ['', ''],
        };
    }
  }
};

function MainBar(props) {
  const { lowerLimit, upperLimit, step, years, dispatch, view, office } = props;
  const values = [];
  for (let i = lowerLimit; i <= upperLimit; i += step) {
    values.push(i);
  }
  const n_ticks = values.length;

  let leftStart = parseInt(years[0]);
  let rightStart = parseInt(years[1]);
  useInterval(() => {
    leftStart = parseInt(years[0]);
    rightStart = parseInt(years[1]);
    set_left_thumb_snap_tick(values.indexOf(leftStart));
    set_right_thumb_snap_tick(values.indexOf(rightStart));
  },1000);

  const bar_ref = useRef();
  const left_thumb_ref = useRef();
  const right_thumb_ref = useRef();
  const [thumb_dragging, set_thumb_dragging] = useState(null);

  const [left_thumb_snap_tick, set_left_thumb_snap_tick] = useState(
    values.indexOf(leftStart)
  );
  const [right_thumb_snap_tick, set_right_thumb_snap_tick] = useState(
    values.indexOf(rightStart)
  );

  const thumb_on_mouse_down = (e, thumb) => {
    e.stopPropagation();
    e.preventDefault();
    if (thumb === 'left') {
      set_thumb_dragging(left_thumb_ref);
      left_thumb_ref.current.style.cursor = 'grabbing';
    } else if (thumb === 'right') {
      set_thumb_dragging(right_thumb_ref);
      right_thumb_ref.current.style.cursor = 'grabbing';
    }
  };
  const bar_on_mouse_up = (e,view,office) => {
    console.log('????');
    thumb_dragging.current.style.cursor = 'grab';
    if (thumb_dragging) {
      const pos =
        e.clientX -
        Math.floor(thumb_dragging.current.getBoundingClientRect().width / 2);
      const thumb_width = thumb_dragging.current.getBoundingClientRect().width;
      const tick_to_snap_to = get_nearest_tick_to_snap_to(
        pos,
        thumb_width,
        bar_start,
        bar_width,
        n_ticks
      );
      thumb_dragging.current.style.left =
        bar_start +
        (tick_to_snap_to * bar_width) / (n_ticks - 1) -
        Math.floor(thumb_width / 2) +
        'px';
      const key = thumb_dragging.current.getAttribute('data-key');
      console.log(key);
      if (key === 'left') {
        set_left_thumb_snap_tick(tick_to_snap_to);
        console.log(tick_to_snap_to);
        dispatch(setHeatMapYears(view, office, 0, values[tick_to_snap_to]));
        console.log('GETS HERE');
      } else if (key === 'right') {
        set_right_thumb_snap_tick(tick_to_snap_to);
        dispatch(setHeatMapYears(view, office, 1, values[tick_to_snap_to]));
        console.log('GETS HERE');
      }
    }
    set_thumb_dragging(null);
  };
  function get_nearest_tick_to_snap_to(
    pos,
    thumb_width,
    bar_start,
    bar_width,
    n_ticks
  ) {
    const n_parcellations = (n_ticks - 1) * 2;
    let rel_pos = pos - bar_start;
    if (rel_pos <= bar_width / n_parcellations) {
      return 0; // we want the ZEROth tick
    } else if (rel_pos >= bar_width - bar_width / n_parcellations) {
      return n_ticks - 1; // we want the LAST tick
    }
    rel_pos += bar_width / n_parcellations;
    return Math.floor(
      ((rel_pos + Math.floor(thumb_width / 2)) * (n_ticks - 1)) / bar_width
    );
  }
  const bar_on_mouse_move = e => {
    e.stopPropagation();
    e.preventDefault();
    if (thumb_dragging) {
      thumb_dragging.current.style.left = e.clientX + 'px';
    }
  };

  const bar_start = bar_ref.current
    ? bar_ref.current.getBoundingClientRect().left
    : null;
  const bar_width = bar_ref.current
    ? bar_ref.current.getBoundingClientRect().width
    : null;

  return (
    <div
      className="slider-bar-alignment-container"
      style={{
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '10%',
      }}
      onMouseMove={bar_on_mouse_move}
      onMouseUp={e => bar_on_mouse_up(e,view,office)}
      ref={bar_ref}
    >
      <Thumb
        bar_ref={bar_ref ? bar_ref : null}
        snap_tick={left_thumb_snap_tick}
        n_ticks={values.length}
        thumb_key={'left'}
        thumb_ref={left_thumb_ref}
        thumb_on_mouse_down={thumb_on_mouse_down}
        color={'blue'}
      />
      <Thumb
        bar_ref={bar_ref ? bar_ref : null}
        snap_tick={right_thumb_snap_tick}
        n_ticks={values.length}
        thumb_key={'right'}
        thumb_ref={right_thumb_ref}
        thumb_on_mouse_down={thumb_on_mouse_down}
        color={'red'}
      />
      <div
        className="slider-bar"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '1px',
          backgroundColor: 'blue',
        }}
      >
        {values.map((val, idx) => {
          return <Tick value={val} key={val} />;
        })}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(MainBar);
