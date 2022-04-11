/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function CanvasPixel(props) {
  const { color, border } = props;
  const [prevColor, setPrevColor] = useState('#fff');
  return (
    <span
      className={`pixel bg-white w-3 h-3 ${
        border && '!border border-zinc-200'
      }`}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = color;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = prevColor;
      }}
      onClick={() => {
        setPrevColor(color);
      }}
    />
  );
}
