const songs = [
  {
    id: 1,
    title: "Pehla Bhi Main",
    artist: "Vishal Mishra",
    duration: "4:10",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    audio: "./assets/song1.mp3",
  },
  {
    id: 2,
    title: "Arjan Vailly",
    artist: "Bhupinder Babbal",
    duration: "3:02",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    audio: "./assets/song2.mp3",
  },
  {
    id: 3,
    title: "Satranga",
    artist: "Arijit Singh",
    duration: "4:30",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
    audio: "./assets/song3.mp3",
  },

  {
    id: 4,
    title: "Kesariya",
    artist: "Arijit Singh",
    duration: "4:28",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    audio: "./assets/song1.mp3",
  },
  {
    id: 5,
    title: "Apna Bana Le",
    artist: "Arijit Singh",
    duration: "4:21",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
    audio: "./assets/song2.mp3",
  },
  {
    id: 6,
    title: "Tere Pyaar Mein",
    artist: "Arijit Singh",
    duration: "4:26",
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885",
    audio: "./assets/song3.mp3",
  },
  {
    id: 7,
    title: "Heeriye",
    artist: "Jasleen Royal",
    duration: "3:15",
    image: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b",
    audio: "./assets/song1.mp3",
  },
  {
    id: 8,
    title: "Chaleya",
    artist: "Arijit Singh",
    duration: "3:20",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b",
    audio: "./assets/song2.mp3",
  },
  {
    id: 9,
    title: "Tum Kya Mile",
    artist: "Arijit Singh",
    duration: "4:35",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    audio: "./assets/song3.mp3",
  },
  {
    id: 10,
    title: "Raatan Lambiyan",
    artist: "Jubin Nautiyal",
    duration: "3:50",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmMxNmNmZWQtODE5NS00Y2VjLWFkNjUtMDEzMjRkMDIzYTNkXkEyXkFqcGc@._V1_FMjpg_UX640_.jpg",
    audio: "./assets/song1.mp3",
  },
  {
    id: 11,
    title: "Shayad",
    artist: "Arijit Singh",
    duration: "4:08",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    audio: "./assets/song2.mp3",
  },
  {
    id: 12,
    title: "Dil Diyan Gallan",
    artist: "Atif Aslam",
    duration: "4:20",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    audio: "./assets/song3.mp3",
  },
  {
    id: 13,
    title: "Raataan Lambiyan",
    artist: "Asees Kaur",
    duration: "3:45",
    image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229",
    audio: "./assets/song1.mp3",
  },
  {
    id: 14,
    title: "Bekhayali",
    artist: "Sachet Tandon",
    duration: "6:10",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad",
    audio: "./assets/song2.mp3",
  },
  {
    id: 15,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    duration: "4:22",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    audio: "./assets/song3.mp3",
  },
  {
    id: 16,
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva",
    duration: "3:56",
    image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa",
    audio: "./assets/song1.mp3",
  },
  {
    id: 17,
    title: "Kalank Title Track",
    artist: "Arijit Singh",
    duration: "5:11",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    audio: "./assets/song2.mp3",
  },
  {
    id: 18,
    title: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh",
    duration: "4:29",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    audio: "./assets/song3.mp3",
  },
  {
    id: 19,
    title: "Raabta",
    artist: "Arijit Singh",
    duration: "4:03",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
    audio: "./assets/song1.mp3",
  },
  {
    id: 20,
    title: "Hawayein",
    artist: "Arijit Singh",
    duration: "4:48",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    audio: "./assets/song2.mp3",
  },
];

// ================== RENDER SONG LIST ==================


let all_songs = document.querySelector(".all-songs");

// render songs dynamically
let render_music = songs
  .map((song) => {
    return `
      <div class="song-card" data-id="${song.id}">
        <div class="card-section">
          <img src="${song.image}?w=60&h=60&fit=crop&auto=format"
               alt="${song.title}" loading="lazy" width="60" height="60"/>
          <div>
            <h2>${song.title}</h2>
            <p>${song.artist}</p>
          </div>
        </div>
        <p class="duration">${song.duration || "--:--"}</p>
      </div>
    `;
  })
  .join("");

// insert to DOM
all_songs.innerHTML = render_music;

// ================== AUDIO  ==================

// create audio instance
let audio = new Audio();

// track current song index
let currentIndex = 0;

// player states
let isShuffle = false;
let repeatMode = "off"; // off | all | one


// ================== SELECTORS ==================
// controler 
let play = document.querySelector(".play"); 
let playIcon = document.querySelector(".play-icon");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let left = document.querySelector(".left");
let shuffleBtn = document.querySelector(".shuffle");
let repeatBtn = document.querySelector(".repeat");
let repeatIcon = document.querySelector(".repeat-icon");

// progress bar section
let progressBar = document.querySelector(".progress-bar");
let progressFill = document.querySelector(".progress-fill");
let currentTimeEl = document.querySelector(".current-time");
let totalTimeEl = document.querySelector(".total-time");

// ================== PLAY SONG FUNCTION ==================

//  handles everything
function playSong(index) {
  let song = songs[index];

  // set audio source
  audio.src = song.audio;

  // play audio
  audio.play();

  // update play button UI
  playIcon.classList.replace("fa-play", "fa-pause");

  // update left section UI
  left.innerHTML = `
    <img src="${song.image}" loading="lazy"/>
    <div style="padding:20px">
      <h2>${song.title}</h2>
      <p>${song.artist}</p>
    </div>
  `;

  // highlight active song
  document.querySelectorAll(".song-card").forEach((card) => {
    card.classList.remove("active");
  });

  document
    .querySelector(`[data-id="${song.id}"]`)
    .classList.add("active");
}


// ================== PLAY / PAUSE ==================
function playPause() {
  // if no song loaded → play first
  if (!audio.src) {
    playSong(currentIndex);
    return;
  }

  if (audio.paused) {
    audio.play();
    playIcon.classList.replace("fa-play", "fa-pause");
  } else {
    audio.pause();
    playIcon.classList.replace("fa-pause", "fa-play");
  }
}

play.addEventListener("click", playPause);


// ================== SHUFFLE ==================
shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;

  // toggle UI
  shuffleBtn.classList.toggle("active");
});


// ================== REPEAT ==================
repeatBtn.addEventListener("click", () => {

  if (repeatMode === "off") {
    repeatMode = "all";
    repeatBtn.classList.add("active");
  } 
  else if (repeatMode === "all") {
    repeatMode = "one";
    repeatIcon.classList.remove("fa-repeat");
    repeatIcon.classList.add("fa-repeat-1");
  } 
  else {
    repeatMode = "off";
    repeatBtn.classList.remove("active");
    repeatIcon.classList.remove("fa-repeat-1");
    repeatIcon.classList.add("fa-repeat");
  }

});


// ================== Random index ==================
function getRandomIndex() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * songs.length);
  } while (newIndex === currentIndex);
  return newIndex;
}


// ================== NEXT ==================
next.addEventListener("click", handleNext);

function handleNext(){
  if (isShuffle) {
    currentIndex = getRandomIndex();
  } else {
    currentIndex = (currentIndex + 1) % songs.length;
  }
  playSong(currentIndex);
  next.blur();
}

// ================== PREVIOUS ==================
previous.addEventListener("click", handlePrevious);

function handlePrevious() {
  if (isShuffle) {
    currentIndex = getRandomIndex();
  } else {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  }

  playSong(currentIndex);
  previous.blur()
}

// ================== AUTO PLAY ==================
audio.addEventListener("ended", () => {
  // repeat ONE
  if (repeatMode === "one") {
    playSong(currentIndex);
    return;
  }

  // shuffle
  if (isShuffle) {
    currentIndex = getRandomIndex();
  } else {
    currentIndex++;
  }
  // stop if repeat OFF
  if (repeatMode === "off" && currentIndex >= songs.length) {
    playIcon.classList.replace("fa-pause", "fa-play");
    return;
  }
  // loop if repeat ALL
  if (currentIndex >= songs.length) {
    currentIndex = 0;
  }
  playSong(currentIndex);
});


// ================== CLICK SONG ==================
all_songs.addEventListener("click", (e) => {
  let card = e.target.closest(".song-card");
  if (!card) return;

  let id = card.dataset.id;

  currentIndex = songs.findIndex((song) => song.id == id);

  playSong(currentIndex);
});


// ================== TIME FORMAT ==================
function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}


// ================== PROGRESS UPDATE ==================
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  let percent = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = percent + "%";

  currentTimeEl.textContent = formatTime(audio.currentTime);
  totalTimeEl.textContent = formatTime(audio.duration);
});

// ================== PROGRESS BAR CLICK AND UPDATE ==================
progressBar.addEventListener("click", (e) => {
  let width = progressBar.clientWidth;
  let clickX = e.offsetX;

  audio.currentTime = (clickX / width) * audio.duration;
});


// ================== DRAG SEEK ==================
let isDragging = false;

progressBar.addEventListener("mousedown", () => {
  isDragging = true;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let rect = progressBar.getBoundingClientRect();
  let offsetX = e.clientX - rect.left;

  let width = rect.width;

  if (offsetX < 0) offsetX = 0;
  if (offsetX > width) offsetX = width;

  let percent = offsetX / width;

  progressFill.style.width = percent * 100 + "%";
  audio.currentTime = percent * audio.duration;
});

// keybaord events 
document.addEventListener("keydown", (e) => {

  // prevent typing conflict
  if (
    e.target.tagName === "INPUT" ||
    e.target.tagName === "TEXTAREA"
  ) return;

  switch (e.code) {

    case "Space":
      e.preventDefault();
      playPause();
      break;

    case "ArrowRight":
      handleNext();  
      break;

    case "ArrowLeft":
      handlePrevious(); 
      break;
  }

});