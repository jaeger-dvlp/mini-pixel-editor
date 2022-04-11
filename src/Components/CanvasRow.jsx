/* eslint-disable react/prop-types */
import React from 'react';
import CanvasPixel from './CanvasPixel';

export default function CanvasRow(props) {
  const { width, color, border } = props;
  const pixels = [];
  for (let x = 0; x < width; x += 1) {
    pixels.push(
      <CanvasPixel border={border} key={`canvasPixel${x}`} color={color} />,
    );
  }
  return <div className="row flex justify-start">{pixels}</div>;
}
