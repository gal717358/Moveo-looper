import React, { useState, useEffect, useRef } from 'react';
import Buttons from '../Buttons/Buttons';
import TrackList from '../TrackList/TrackList';
import { tracks } from '../../utils/constant';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const progressBar = useRef();
  const progressRef = useRef();

  //play and pause
  const handlePlayPause = () => {
    const status = isPlaying;
    setIsPlaying(!status);

    if (!status) {
      tracks.forEach(({ audio }) => {
        audio.play();
        progressRef.current = requestAnimationFrame(onPlaying);
      });
    } else {
      tracks.forEach(({ audio }) => {
        audio.pause();
        cancelAnimationFrame(progressRef.current);
      });
    }
  };

  //stop and start over
  const handleStopPlay = () => {
    setIsPlaying(false);
    tracks.forEach(({ audio }) => {
      audio.pause();
      audio.currentTime = 0;
    });
  };
  //mute effect
  const toggleMute = (trackID) => {
    trackID.muted = !trackID.muted;
  };

  //play loop
  const handleLoop = () => {
    const status = isLooping;
    setIsLooping(!status);
    tracks.forEach(({ audio }) => {
      audio.loop = !audio.loop;
    });
  };

  const trackDuration = Math.floor(tracks[0].audio.duration);

  useEffect(() => {
    const trackTime = trackDuration;
    setDuration(trackTime);
    progressBar.current.max = trackTime;
  }, [trackDuration]);

  useEffect(() => {
    if (currentTime === 17 && tracks[0].audio.loop === false) {
      setIsPlaying(false);
    }
  }, [currentTime]);

  const onPlaying = () => {
    progressBar.current.value = tracks[0].audio.currentTime;
    setCurrentTime(progressBar.current.value);
    progressRef.current = requestAnimationFrame(onPlaying);
  };

  const setRange = () => {
    tracks.forEach(({ audio }) => {
      audio.currentTime = progressBar.current.value;
    });
    setCurrentTime(progressBar.current.value);
  };

  const timeCalculation = (sec) => {
    const minutes = Math.floor(sec / 60);
    const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${newMinutes}:${newSeconds}`;
  };

  return (
      <div className='player__container'>
        <h1 className='player__title'>The Loop machine of Moveo</h1>
        <input
          className=
          {
            isPlaying ? 'player__bar' : 'player__bar player__bar_disable'
          }
          onChange={setRange}
          type='range'
          min='0'
          max='17'
          defaultValue='0'
          ref={progressBar}
        />
        <TrackList tracks={tracks} onMute={toggleMute} />

        <Buttons
          playPause={handlePlayPause}
          stopPlay={handleStopPlay}
          isPlaying={isPlaying}
          looping={handleLoop}
          isLooping={isLooping}
          trackDuration={duration}s
          currentTime={currentTime}
          timeCalculation={timeCalculation}
        />
      </div>
  );
}

export default Player;
