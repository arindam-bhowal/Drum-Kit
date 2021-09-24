

function playSound(e) {
    // console.log(e);
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(audio);
    if (!audio) return;     // This will stop the function here itself

    audio.currentTime = 0;    //Rewind to the start
    audio.play();
    key.classList.add('playing');
}
window.addEventListener('keydown', playSound);



function removeTransition(e) {
    if (e.propertyName != 'transform') return;  //skif if not a transform
    //    console.log(e.propertyName);
    // console.log(this);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));




// let box = document.querySelectorAll('.key');

// box.forEach(key => key.addEventListener('click', function (e) {
//     // console.log(e);
//     let beats= document.querySelectorAll('audio');
//     beats[8].currentTime=0;
//     beats[8].play();
//     let play= document.querySelectorAll('.key');
//     play[8].classList.add('playing');
// }))
