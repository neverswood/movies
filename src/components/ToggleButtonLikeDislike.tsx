import '../styles/ToggleButtonLikeDislike.scss';
import { ChangeEventHandler, MouseEventHandler, useState } from 'react';

type ToggleButton = {
  check: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLInputElement>;
};

/**
 * Toggle button to be able to like and dislike the film
 * @param {boolean} check - The button checked
 * @param {ChangeEventHandler<HTMLInputElement>} onChange - The event to change the button state
 * @param {MouseEventHandler<HTMLInputElement>} onClick - The event to click the button
 * @returns {ToggleButtonLikeDislike}
 */

export function ToggleButtonLikeDislike({
  check,
  onChange,
  onClick,
}: ToggleButton) {
  return (
    <div className="switch-button">
      <input
        className="switch-button-checkbox"
        type="checkbox"
        defaultChecked={check}
        onChange={onChange}
        onClick={onClick}
      ></input>
      <label className="switch-button-label" htmlFor="">
        <span className="switch-button-label-span ">
          <span>💖 Like</span>
        </span>
      </label>
    </div>
  );
}
