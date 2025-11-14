

let songs = [
  { title: "sab tera (NCS Release)", src: "songs/sab tera.mp3" },
  { title: "Teri Jhuki Nazar (NCS Release)", src: "songs/Teri Jhuki Nazar Film Version Murder 3 320 Kbps.mp3" },
  { title: "Tum_Hi_Ho_Arijit_Singh (NCS Release)", src: "songs/Tum_Hi_Ho_Arijit_Singh.mp3" }
];

let currentSong = 0;
let audio = new Audio(songs[currentSong].src);
let playBtn = document.querySelectorAll(".material-icons")[1];
let nextBtn = document.querySelectorAll(".material-icons")[2];
let prevBtn = document.querySelectorAll(".material-icons")[0];
let progress = document.getElementById("myProgressbar");
let title = document.getElementById("songTitle");


title.innerText = "Now Playing: " + songs[currentSong].title;

playBtn.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    playBtn.innerText = "pause"; 
  } else {
    audio.pause();
    playBtn.innerText = "play_arrow";
  }
});


nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  audio.src = songs[currentSong].src;
  title.innerText = "Now Playing: " + songs[currentSong].title;
  audio.play();
  playBtn.innerText = "pause";
});


prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  audio.src = songs[currentSong].src;
  title.innerText = "Now Playing: " + songs[currentSong].title;
  audio.play();
  playBtn.innerText = "pause";
});


audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});


progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});   
 
audio.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % songs.length;
  playSong();
});

