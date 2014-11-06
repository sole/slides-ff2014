var audioContext = new AudioContext();
var oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start(audioContext.currentTime);

oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 3);

