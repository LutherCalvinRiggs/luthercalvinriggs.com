const audio = document.querySelector(`audio[id='${e.}']`);
const trackName = document.querySelector('#trackName');
// one for each track on the page 

function stopAllPlayback() {
    allAudio.classList.remove('playing');
}


// YOU ARE HERE - Check all tracks looking for .playback - If found, play audio 
function playTrack() {
    allAudio.forEach(checkPlaying())
    
    trackName.classList.add('playing');
    trackName.play();


    // myAudioElement.addEventListener("canplaythrough", event => {
    //     /* the audio is now playable; play it if permissions allow */
    //     myAudioElement.play();
    // });

}

function audioPlayback() {
    stopAllPlayback(); // may be able to combine with the playTrack()
    playTrack();
    pulseBackground();

}

trackName.onclick('click', audioPlayback());
