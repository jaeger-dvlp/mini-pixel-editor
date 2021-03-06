import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import Canvas from './Canvas';

export default function Editor() {
  const [canvasWidth, setCanvasWidth] = useState(16);
  const [canvasHeight, setCanvasHeight] = useState(16);
  const [canvasOptions, setCanvasOptions] = useState(true);
  const [pixelColor, setPixelColor] = useState('#2196f3');
  const [pixelBorder, setPixelBorder] = useState(true);

  return (
    <div
      id="editor"
      className="font-pop gap-5 transition-all duration-150 grid grid-cols-1 place-content-start place-items-center min-w-[16rem] bg-brand-light rounded-xl shadow-xl overflow-hidden p-5"
    >
      <div className="w-full grid grid-cols-1 place-content-start place-items-start">
        <h1 className="text-zinc-300 text-xl pb-3 border-b-2 w-full mb-3 border-zinc-200/10 font-normal">
          Mini Pixel Editor
        </h1>

        <p className="text-zinc-400 animate-fade-right text-sm font-normal">
          {canvasOptions
            ? 'Please enter panel dimensions.'
            : 'Enjoy your drawing :)'}
        </p>
      </div>
      {canvasOptions && (
        <div className="w-full animate-fade-in flex flex-wrap gap-5 justify-between content-center">
          <div className="grid grid-cols-1 gap-1 place-content-start place-items-start">
            <span className="text-zinc-400 text-xs font-normal">Width</span>
            <input
              className=" bg-zinc-400 !outline-none !border-none focus:!ring-2 focus:!ring-slate-500 ring-offset-2 ring-offset-brand-light transition-all duration-150 p-2 rounded-lg max-w-[5rem] text-center"
              type="text"
              defaultValue={canvasWidth}
              onChange={(e) => setCanvasWidth(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 place-content-center place-items-center text-xs text-zinc-400 pt-5">
            x
          </div>
          <div className="grid grid-cols-1 gap-1 place-content-start place-items-start">
            <span className="text-zinc-400 text-xs font-normal">Height</span>
            <input
              className=" bg-zinc-400 !outline-none !border-none focus:!ring-2 focus:!ring-slate-500 ring-offset-2 ring-offset-brand-light transition-all duration-150 p-2 rounded-lg max-w-[5rem] text-center"
              type="text"
              defaultValue={canvasHeight}
              onChange={(e) => setCanvasHeight(e.target.value)}
            />
          </div>
        </div>
      )}
      {!canvasOptions && (
        <div className="p-5 animate-fade-in bg-zinc-800/50 rounded-lg">
          <CirclePicker
            circleSize={15}
            color={pixelColor}
            onChangeComplete={setPixelColor}
          />
        </div>
      )}
      {!canvasOptions && (
        <>
          <Canvas
            width={canvasWidth}
            height={canvasHeight}
            color={pixelColor.hex || pixelColor}
            border={pixelBorder}
          />
          <div className=" hidden justify-start gap-1">
            <input
              type="checkbox"
              className="rounded-xl checked:!bg-red-500 bg-zinc-400 border-none"
              defaultChecked
              onChange={(e) => setPixelBorder(e.target.checked)}
            />
            <span className="text-zinc-400 text-xs font-normal">
              Activate Borders
            </span>
          </div>
        </>
      )}
      <button
        type="button"
        className="w-full bg-[#4393FF] transition-all duration-150 text-center hover:brightness-90 text-white p-3 active:scale-90 rounded-lg"
        onClick={() => setCanvasOptions(!canvasOptions)}
      >
        {canvasOptions ? 'Start Drawing' : 'Reset'}
      </button>
    </div>
  );
}
