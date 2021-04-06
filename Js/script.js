let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 5;

}

function avancar() {
    video.currentTime += 5;
}

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function diminuirV() {
    video.playbackRate -= 0.1;

}

function aumentarV() {
    video.playbackRate += 0.1;
}