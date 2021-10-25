const audio = new Audio();
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const playPrev = document.querySelector(".play-prev");
const playNext = document.querySelector(".play-next");
const playlistUl = document.querySelector(".play-list");
const volumeRange = document.getElementById("volumeRanges");
const playRange = document.getElementById("playRange");
const audioTitle = document.querySelector(".audio-title");
const audioMute = document.querySelector(".audio-mute");
const volMute = document.querySelector(".vol-mute");
const volOn = document.querySelector(".vol-on");
const audioTime = document.querySelector(".audio-time");

let currentAudio = 0;
let isPlay;

function play() {
  playBtn.classList.add("pause");
  isPlay = true;

  return audio.play();
}

function pause() {
  playBtn.classList.remove("pause");
  isPlay = false;
  audio.pause();
}

function currentAudioChange() {
  audioTitle.textContent = playList[currentAudio].title;
  audio.src = playList[currentAudio].src;
}

playNext.addEventListener("click", (e) => {
  currentAudio++;
  if (currentAudio >= playList.length) currentAudio = 0;
  currentAudioChange();
  changeCurrentAudioColor();
  play();
});

playPrev.addEventListener("click", (e) => {
  currentAudio--;
  if (currentAudio < 0) currentAudio = playList.length - 1;
  currentAudioChange();
  changeCurrentAudioColor();
  play();
});

playBtn.addEventListener("click", (e) => {
  if (isPlay) pause();
  else play();
});

currentAudioChange();

/////////    PLAYLIST LIST    //////////

playList.forEach((audio) => {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.textContent = audio.title;
  playlistUl.append(li);
});

function changeCurrentAudioColor() {
  const playlistLi = document.querySelectorAll(".play-item");
  playlistLi.forEach((li) => li.classList.remove("item-active"));
  playlistLi[currentAudio].classList.add("item-active");
}

//////   RANGE   /////////

playRange.addEventListener("change", (e) => {
  const percent = Math.floor(playRange.value * audio.duration) / 100;
  audio.currentTime = percent;
});

volumeRange.addEventListener("mousemove", (e) => {
  audio.volume = volumeRange.value;
});

function updatePlayRange() {
  const percent = (audio.currentTime / audio.duration) * 100;
  playRange.value = percent;
  updateTime();
}

function updateTime() {
  const duration = (audio.duration / 60).toFixed(2);
  let currentTime = (audio.currentTime / 60).toFixed(2);
  currentTime = String(currentTime).split(".");
  currentTime = `${currentTime[0]}:${currentTime[1]}/ ${duration}`;
  audioTime.textContent = currentTime;
}
updateTime();

function toggleVolumeMute() {
  if (audio.volume == 0) {
    volumeRange.value = 0.5;
    audio.volume = 0.5;
  } else {
    volumeRange.value = 0;
    audio.volume = 0;
  }
}

audio.addEventListener("timeupdate", updatePlayRange);

volumeRange.addEventListener("change", (e) => {
  audio.volume = volumeRange.value;
});

audioMute.addEventListener("click", (e) => {
  volMute.classList.toggle("hide");
  volOn.classList.toggle("hide");
  toggleVolumeMute();
});

changeCurrentAudioColor();

audioTime.textContent = "0:00/ 5.57";
