/* eslint-disable react/prop-types */
import React from 'react';
import CanvasRow from './CanvasRow';

export default function Canvas(props) {
  const { width, height, color, border } = props;

  const rows = [];

  for (let x = 0; x < height; x += 1) {
    rows.push(
      <CanvasRow key={x} width={width} color={color} border={border} />,
    );
  }

  return (
    <div className="animate-fade-in p-0 bg-white grid grid-cols-1 place-content-start place-items-start">
      {rows}
    </div>
  );
}
