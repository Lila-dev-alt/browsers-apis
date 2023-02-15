/* Progressive enhancement : Use custom controls if JS is correctly loaded */
const video = document.getElementById("video");
const controls = document.getElementById("controls");
video.removeAttribute("controls");
controls.style.visibility = "visible";
let play = document.getElementById("play");
let mute = document.getElementById("mute");

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
play.addEventListener('click', playPauseOnVideo);
mute.addEventListener('click', unmuteVideo);
