import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = 'videoplayer-current-time';
const currentTimeInLocal = localStorage.getItem(currentTime);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(timeupdate) {
  localStorage.setItem(currentTime, timeupdate.seconds);
}

player.setCurrentTime(JSON.parse(currentTimeInLocal) || 0);
