var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  video = document.querySelector("#player1");
  video.autoplay = false;
  video.loop = false;

  const playBtn = document.querySelector("#play");
  const pauseBtn = document.querySelector("#pause");
  const slowerBtn = document.querySelector("#slower");
  const fasterBtn = document.querySelector("#faster");
  const skipBtn = document.querySelector("#skip");
  const muteBtn = document.querySelector("#mute");
  const volumeSlider = document.querySelector("#slider");
  const volumeText = document.querySelector("#volume");
  const vintageBtn = document.querySelector("#vintage");
  const originalBtn = document.querySelector("#orig");

  playBtn.addEventListener("click", function () {
    video.play();
    volumeText.textContent = Math.round(video.volume * 100) + "%";
  });

  pauseBtn.addEventListener("click", function () {
    video.pause();
  });

  slowerBtn.addEventListener("click", function () {
    video.playbackRate = video.playbackRate * 0.9;
    console.log(video.playbackRate);
  });

  fasterBtn.addEventListener("click", function () {
    video.playbackRate = video.playbackRate / 0.9;
    console.log(video.playbackRate);
  });

  skipBtn.addEventListener("click", function () {
    if (video.currentTime + 10 >= video.duration) {
      video.currentTime = 0;
    } else {
      video.currentTime += 10;
    }
    console.log(video.currentTime);
  });

  muteBtn.addEventListener("click", function () {
    video.muted = !video.muted;

    if (video.muted) {
      muteBtn.textContent = "Unmute";
    } else {
      muteBtn.textContent = "Mute";
    }
  });

  volumeSlider.addEventListener("input", function () {
    video.volume = volumeSlider.value / 100;
    volumeText.textContent = Math.round(video.volume * 100) + "%";
  });

  vintageBtn.addEventListener("click", function () {
    video.classList.add("oldSchool");
  });

  originalBtn.addEventListener("click", function () {
    video.classList.remove("oldSchool");
  });
});