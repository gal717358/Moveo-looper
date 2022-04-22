import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { BsStopFill } from 'react-icons/bs';
import { BsArrowRepeat } from 'react-icons/bs';
import { BsPauseFill } from 'react-icons/bs';

const Buttons = (props) => {
  return (
    <div className='buttons'>
      <div className='buttons__container'>
        <div className='buttons__wrapper'>
          <button type='button' onClick={props.playPause} className='button'>
            {props.isPlaying ? (
              <BsPauseFill size='24px' />
            ) : (
              <BsPlayFill size='24px' />
            )}
          </button>
          <button type='button' onClick={props.stopPlay} className='button'>
            <BsStopFill size='24px' />
          </button>
          <button
            className={`button ${
              props.isLooping ? 'button__loop_active' : 'button'
            }`}
            type='button'
            onClick={props.looping}
          >
            {props.isLooping ? (
              <BsArrowRepeat size='24px' color='rgba(255, 0, 0, 0.8)' />
            ) : (
              <BsArrowRepeat size='24px' />
            )}
          </button>
        </div>
        <div className='button__time-line'>
          <span className='button__current'>
            {props.timeCalculation(props.currentTime)}
          </span>
          /
          <span className='button__duration'>{`${
            props.timeCalculation(props.trackDuration).includes('NaN')
              ? '00:00'
              : props.timeCalculation(props.trackDuration)
          }`}</span>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
