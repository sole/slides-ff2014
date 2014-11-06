var audioContext = new AudioContext();
var oscillator;
var oscillators = [];

function leakLikeTheresNoTomorrow() {
  if(oscillator) {
    oscillator.stop();
    oscillator.disconnect(audioContext.destination);
  }
  oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);
  oscillator.start(audioContext.currentTime);
  oscillators.push(oscillator);
  console.log('oscillators length', oscillators.length);
}

leakLikeTheresNoTomorrow();
