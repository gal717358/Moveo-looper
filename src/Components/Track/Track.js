import React, { useState } from 'react';
import { BsVolumeUp } from 'react-icons/bs';
import { BsVolumeMute } from 'react-icons/bs';

const Track = ({ track, onMute }) => {
  const [isMute, setIsMute] = useState(false);

  const toggleMute = () => {
    setIsMute(!isMute);
    onMute(track.audio);
  };
  return (
    <div className='track'>
      <div
        className='track__container'
        style={{ backgroundColor: track.color }}
      >
        <div className='track__wrapper'>
          <button type='button' className='track__mute' onClick={toggleMute}>
            {isMute ? <BsVolumeMute size={20} /> : <BsVolumeUp size={20} />}
          </button>
          <p className='track__title'>{track.name}</p>
        </div>
        <audio src={track.audio} loop preload='metadata' type='mp3'></audio>
      </div>
    </div>
  );
};

export default Track;
