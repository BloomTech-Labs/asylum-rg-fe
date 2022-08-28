import React, { useEffect, useState, useRef } from 'react';
import { useInterval } from '../../../../utils';

function Thumb(props) {
  const {
    thumb_key,
    snap_tick,
    bar_ref,
    thumb_ref,
    color,
    n_ticks,
    thumb_on_mouse_down,
  } = props;
  const [pos, set_pos] = useState(0);
  let my_width;
  let bar_start;
  let bar_width;
  useInterval(() => {
    my_width = thumb_ref.current.getBoundingClientRect().width;
    bar_start = bar_ref.current.getBoundingClientRect().left;
    bar_width = bar_ref.current.getBoundingClientRect().width;
    set_pos(
      bar_start +
        (snap_tick * bar_width) / (n_ticks - 1) -
        Math.floor(my_width / 2)
    );
  }, 100);
  return (
    <div
      className="thumb-outer"
      ref={thumb_ref}
      style={{
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        backgroundColor: color,
        position: 'absolute',
        left: pos + 'px',
        cursor: 'grab',
        dataKey: thumb_key,
      }}
      onMouseDown={e => thumb_on_mouse_down(e, thumb_key)}
    ></div>
  );
}

export default Thumb;
