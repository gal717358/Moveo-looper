import all from '../Tracks/ALL TRACK.mp3';
import drums from '../Tracks/DRUMS.mp3';
import shake from '../Tracks/_tambourine_shake_higher.mp3';
import b from '../Tracks/B VOC.mp3';
import hehe from '../Tracks/HE HE VOC.mp3';
import high from '../Tracks/HIGH VOC.mp3';
import jibrish from '../Tracks/JIBRISH.mp3';
import lead from '../Tracks/LEAD 1.mp3';
import uuho from '../Tracks/UUHO VOC.mp3';

export const tracks = [
  { audio: new Audio(all), name: 'All', color: '#D7B9C5' },
  { audio: new Audio(drums), name: 'drums', color: '#ECCBD9' },
  { audio: new Audio(shake), name: 'Shake', color: '#E7DDE8' },
  { audio: new Audio(b), name: 'B', color: '#E1EFF6' },
  { audio: new Audio(hehe), name: 'HeHe', color: '#97D2FB' },
  { audio: new Audio(high), name: 'High', color: '#8DC7FD' },
  { audio: new Audio(jibrish), name: 'Jibrish', color: '#83BCFF' },
  { audio: new Audio(lead), name: 'Lead', color: '#82DEF4' },
  { audio: new Audio(uuho), name: 'Uuho', color: '#80FFE8' },
];
