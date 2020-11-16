var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	/* add volume to "Volume is: "*/
	console.log("Play Video");
	video.play()
	document.querySelector('#volume').innerHTML = document.volume
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	/* Having rounding issues */
	video.playbackRate = video.playbackRate * 1.1
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	/* Length function not working in if statement */
	var time = document.getElementById('myVideo')
	video.currentTime += 5
	if (video.currentTime > document.getElementById(myVideo).length){
		console.log("Going back to beginning");
		console.log("Current location 0");
		video.currentTime = 0;
		video.play()
	}
	else {
		console.log("Current Location is " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	/* Unmute to mute not working */
	document.querySelector('#mute').innerHTML = 'Unmute';
	video.muted = true;
	document.querySelector('#volume').innerHTML = 0;
	if (document.querySelector('#mute').innerHTML == 'Unmute'){
		document.querySelector('#mute').onclick.innerHTML = "Mute"
		video.muted = false;
	}
});

/* Insert Volume Slider here */

document.querySelector("#old").addEventListener("click", function() {
	/* Old School */
});

document.querySelector("#old").addEventListener("click", function() {
	/* Original */
});