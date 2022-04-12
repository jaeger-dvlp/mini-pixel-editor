/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';

export default function Canvas(props) {
  const { width, height, color /* border */ } = props;

  const canvasPalette = useRef();

  const drawPixel = (x, y, ctx) => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.strokeRect(
      x + 0.5,
      y + 0.5,
      canvasPalette.current.width / width,
      canvasPalette.current.height / height,
    );
    ctx.fillRect(
      x + 0.5,
      y + 0.5,
      canvasPalette.current.width / width,
      canvasPalette.current.height / height,
    );
  };

  const handleCanvasClick = (e) => {
    const rect = canvasPalette.current.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) * width) / rect.width);
    const y = Math.floor(((e.clientY - rect.top) * height) / rect.height);
    drawPixel(x, y, canvasPalette.current.getContext('2d'));
  };
  useEffect(() => {
    canvasPalette.current.addEventListener('click', handleCanvasClick);

    return () =>
      canvasPalette.current &&
      canvasPalette.current.removeEventListener('click', handleCanvasClick);
  }, [color]);

  return (
    <div className="animate-fade-in p-0 grid-cols-1 place-content-center place-items-center">
      <canvas
        ref={canvasPalette}
        className=" bg-white z-1 rounded-lg overflow-hidden pixel-canvas w-[272px] h-[272px]"
        width={width}
        height={height}
      />
    </div>
  );
}
