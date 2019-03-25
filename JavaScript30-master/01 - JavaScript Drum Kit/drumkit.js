document.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) {return} // break if there's no audio associated with keyCode
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing')
}

const keys = document.querySelectorAll ('.key');

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('transitionend', function(e){
       if (e.propertyName !== 'transform') return;
       this.classList.remove('playing')
    })
}