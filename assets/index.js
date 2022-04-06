import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const buttonPlay = document.getElementById('play');
const buttonMuted = document.getElementById('muted');
const player = new MediaPlayer({el: video, plugins: [
    //new AutoPlay()
]});


//Acción del botón.
buttonPlay.onclick = () => player.togglePlay();
buttonMuted.onclick = () => player.toggleMuted();