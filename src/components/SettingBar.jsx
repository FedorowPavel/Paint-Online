import React from 'react';
import "../styles/toolbar.scss"
import toolState from "../store/toolState";


const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label htmlFor='line-width'>Line width </label>
      <input
        onChange={e => toolState.setLineWidth(e.target.value)}
        type='number'
        min={1}
        max={50}
        defaultValue={1}
        id="line-width"
      />

      <label htmlFor='stroke-color'>Stroke color</label>
      <input
        onChange={e => toolState.setStrokeColor(e.target.value)}
        type='color'
        min={1}
        max={50}
        defaultValue={1}
        id="stroke-color"
      />

    </div>
  );
};

export default SettingBar;
