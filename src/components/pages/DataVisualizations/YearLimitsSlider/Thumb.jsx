import React, { useEffect, useRef } from 'react';

function Thumb(props) {
  const {
    thumb_key,
    snap_tick,
    bar_start, // we pass in ALL these props
    bar_width, // and have the Thumb dynamically reposition itself
    thumb_ref, // so it responds to the width of the slider changing within the DOM!
    color,
    n_ticks,
    thumb_on_mouse_down,
  } = props;
  const my_width = thumb_ref.current
    ? thumb_ref.current.getBoundingClientRect().width
    : 0;
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
        left:
          bar_start +
          (snap_tick * bar_width) / (n_ticks - 1) -
          Math.floor(my_width / 2) +
          'px',
        cursor: 'grab',
        dataKey: thumb_key,
      }}
      onMouseDown={e => thumb_on_mouse_down(e, thumb_key)}
    ></div>
  );
}

export default Thumb;
