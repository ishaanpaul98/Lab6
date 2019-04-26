var pieces, radius, fft, mapMouseX, mapMouseY, toggleBtn, audio, uploadBtn, uploadedAudio, uploadAnim;
var colorPalette = ["#000", "rgba(22, 59, 72, 0.5)", "#00a6e0", "#002a38"];
var uploadLoading = false;

function preload() {
	audio = loadSound("audio/demo.mp3");
}

function uploaded(file) {
	uploadLoading = true;
	uploadedAudio = loadSound(file.data, uploadedAudioPlay);
}

function uploadedAudioPlay(audioFile) {

	uploadLoading = false;

	if (audio.isPlaying()) {
		audio.pause();
	}

	audio = audioFile;
	audio.loop();
}

