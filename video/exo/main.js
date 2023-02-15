/* Progressive enhancement : Use custom controls if JS is correctly loaded */
const video = document.getElementById("video");
const controls = document.getElementById("controls");
video.removeAttribute("controls");
controls.style.visibility = "visible";
let play = document.getElementById("play");
let mute = document.getElementById("mute");
let rewind = document.getElementById("rewind");
let current = document.getElementById("current");
let duration = document.getElementById("duration");

/* Video controls */

/* !!! Magic happens... !!! */

/* Play the video if it is in viewport, otherwise pause the video */
function playPauseVideo() {
  /* It is nicer to our users to have the video muted by default */
  video.muted = true;

  video.play();

  const playPromise = video.play();

  if (playPromise) {
    playPromise.then((_) => {
      /* !!! Magic happens... !!! */
    });
  }
}

playPauseVideo();


/* Pause function */
function playPauseOnVideo() {
   if (video.paused) {
    video.play();
    play.innerText = "Pause";
   }else {
    video.pause();
    play.innerText = "Play !";
   }
}

/* put the volume of the video */
function unmuteVideo() {
  if (video.muted) {
     video.muted = false;
     video.volume = 0.2;
     mute.innerText = "Mute";
  }else {
    video.muted = true;
    mute.innerText = "UnMute";
  }
}
/* put the video at the start function */
function rewindVideo() {
  video.pause();
  video.currentTime = 0;
}
/* put the duration and the time of the video */
function getTimeVideo() {
   let currentTime = video.currentTime;
   current.innerText = Math.floor(currentTime)/100;
   let durationVideo = video.duration;
   duration.innerText = Math.floor(durationVideo) / 100;

}

play.addEventListener('click', playPauseOnVideo);
mute.addEventListener('click', unmuteVideo);
rewind.addEventListener('click', rewindVideo);
video.addEventListener('timeupdate', getTimeVideo);

