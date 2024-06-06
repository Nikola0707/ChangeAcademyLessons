const image = document.querySelector("img"); // Selects the first <img> element
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressCointainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const durationEl = document.getElementById("duration");
const currentTimeEl = document.getElementById("current-time");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

const songs = [
  {
    name: "dayBorn",
    displayName: "The Day I Was Born",
    artist: "Ed Sheeran",
  },
  {
    name: "mansWorld",
    displayName: "It's A Man's Man's World",
    artist: "James Brown",
  },
  {
    name: "unforgiven",
    displayName: "The Unforgiven",
    artist: "Metallica",
  },
  {
    name: "sugar",
    displayName: "Sugar",
    artist: "Slatkaristika X Toni Zen",
  },
];

// Initialize a variable to keep track of whether a song is playing or paused
let isPlaying = false;

// Function to play a song
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play(); // Play the audio
}

// Function to pause a song
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Event listener for play/pause button
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Function to load a song into a player
function loadSong(song) {
  const { displayName, artist, name } = song;
  title.textContent = displayName;
  artist.textContent = artist;
  music.src = `./music/${name}.mp3`;
  image.src = `./img/${name}.jpg`;
}

// Variable to keep track of the index of the current song
let songIndex = 0;

// Function to play the previous song
function prevSong() {
  songIndex--; // Decrement the song index

  if (songIndex < 0) {
    songIndex = songs.length - 1; // If index is negative, loop to the last song
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Function to play the previous song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Event listener to play the next song when the current song ends
music.addEventListener("ended", nextSong);

// Function to update the progress bar and time display
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement; //Get the duration and current time of the audio
    // Calculate progress percentage
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);

    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    durationEl.textContent = `${durationMinutes}:${durationSeconds}`;

    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

music.addEventListener("timeupdate", updateProgressBar);
progressCointainer.addEventListener("click", setProgressBar);
