function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];

    //Inicialización de plugins
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

//Play al video
MediaPlayer.prototype.play = function(){
    this.media.play();
}

//Pause al video
MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

MediaPlayer.prototype.muted = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmuted = function(){
    this.media.unmuted = false;
}

//Checa el estatus del video
MediaPlayer.prototype.togglePlay = function(){
    (this.media.paused) ? this.play() : this.pause();
}

//Mutea o desmutea el video 
MediaPlayer.prototype.toggleMuted = function(){
    (this.media.muted) ? this.media.muted = false : this.media.muted = true;
}


export default MediaPlayer;