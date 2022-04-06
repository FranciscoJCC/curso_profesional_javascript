const video = document.querySelector('video');
const button = document.querySelector('button');
const player = new MediaPlayer({el: video});

function MediaPlayer(config){
    this.media = config.el;
}

//Play al video
MediaPlayer.prototype.play = function(){
    this.media.play();
}

//Pause al video
MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

//Checa el estatus del video
MediaPlayer.prototype.togglePlay = function(){
    (this.media.paused) ? this.play() : this.pause();
}

//Acción del botón.
button.onclick = () => player.togglePlay();