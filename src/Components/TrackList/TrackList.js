import React from 'react';
import Track from '../Track/Track';

const TrackList = ({ tracks, onMute }) => {
  return (
    <div className='tracks__container'>
      <ul className='tracks__wrapper'>
        {tracks.map((item, id) => (
          <li className='track__item' key={id}>
            <Track track={item} onMute={onMute} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
