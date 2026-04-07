const songs = [
  {
    title: "Drive Song",
    artist: "Gamma",
    album: "Album 1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    albumCover: "https://images.unsplash.com/photo-1503327783884-1a65f9c1e207"
  },
  {
    title: "Peaceful Piano",
    artist: "SoundHelix",
    album: "Album 2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    albumCover: "https://images.unsplash.com/photo-1594875122287-f024a22d7f4a"
  },
  {
    title: "Upbeat Energy",
    artist: "Spotify",
    album: "Album 3",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    albumCover: "https://images.unsplash.com/photo-1569487084-5f96be2d5579"
  },
  {
    title: "Relax Vibes",
    artist: "JioSaavn",
    album: "Album 4",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    albumCover: "https://images.unsplash.com/photo-1599298232367-3797461f4d72"
  }
];

let currentSongIndex = 0;
let isPlaying = false;

const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const albumCover = document.getElementById("albumCover");
const songTitle = document.getElementById("songTitle");
const artistName = document.getElementById("artistName");
const audioSource = document.getElementById("audioSource");

function changeSong(index) {
  currentSongIndex = index;
  const song = songs[index];

  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  albumCover.src = song.albumCover;
  audioSource.src = song.src;

  audioPlayer.load();
  audioPlayer.play();

  isPlaying = true;
  playPauseBtn.textContent = "Pause";
}

function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.textContent = "Play";
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
  }
  isPlaying = !isPlaying;
}

playPauseBtn.addEventListener("click", togglePlayPause);

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  changeSong(currentSongIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  changeSong(currentSongIndex);
});

// Load first song
changeSong(currentSongIndex);