var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector('#volume').innerHTML = (video.volume * 100) + '%'
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
	video.playbackRate = video.playbackRate / 0.9
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	/* Length function not working in if statement */
	var time = document.getElementById('myVideo')
	
	if (video.currentTime < video.duration - 5){
		video.currentTime += 5;

	}
	else {
		video.currentTime = 0
	}
	console.log("Current Location is " + video.currentTime);
	console.log(video.duration)
	video.play()
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute")
	if (video.muted == false){
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		this.innerHTML = "Mute"
		console.log("Unmute")
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%"
	console.log(video.volume)
});

document.querySelector("#old").addEventListener("click", function() {
	var elem = document.getElementById("myVideo");
	elem.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	var elem = document.getElementById("myVideo");
	elem.classList.remove("oldTime");
});