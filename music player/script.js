const songs = [
  {
    id: 1,
    title: "Pehla Bhi Main",
    artist: "Vishal Mishra",
    duration: "4:10",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
  {
    id: 2,
    title: "Arjan Vailly",
    artist: "Bhupinder Babbal",
    duration: "3:02",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  },
  {
    id: 3,
    title: "Satranga",
    artist: "Arijit Singh",
    duration: "4:30",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
  },
  {
    id: 4,
    title: "Kesariya",
    artist: "Arijit Singh",
    duration: "4:28",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  },
  {
    id: 5,
    title: "Apna Bana Le",
    artist: "Arijit Singh",
    duration: "4:21",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
  },
  {
    id: 6,
    title: "Tere Pyaar Mein",
    artist: "Arijit Singh",
    duration: "4:26",
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885",
  },
  {
    id: 7,
    title: "Heeriye",
    artist: "Jasleen Royal",
    duration: "3:15",
    image: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b",
  },
  {
    id: 8,
    title: "Chaleya",
    artist: "Arijit Singh",
    duration: "3:20",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b",
  },
  {
    id: 9,
    title: "Tum Kya Mile",
    artist: "Arijit Singh",
    duration: "4:35",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  },
  {
    id: 10,
    title: "Raatan Lambiyan",
    artist: "Jubin Nautiyal",
    duration: "3:50",
    image: "https://m.media-amazon.com/images/M/MV5BZmMxNmNmZWQtODE5NS00Y2VjLWFkNjUtMDEzMjRkMDIzYTNkXkEyXkFqcGc@._V1_FMjpg_UX640_.jpg",
  },
  {
    id: 11,
    title: "Shayad",
    artist: "Arijit Singh",
    duration: "4:08",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
  },
  {
    id: 12,
    title: "Dil Diyan Gallan",
    artist: "Atif Aslam",
    duration: "4:20",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
  },
  {
    id: 13,
    title: "Raataan Lambiyan",
    artist: "Asees Kaur",
    duration: "3:45",
    image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229",
  },
  {
    id: 14,
    title: "Bekhayali",
    artist: "Sachet Tandon",
    duration: "6:10",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad",
  },
  {
    id: 15,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    duration: "4:22",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
  },
  {
    id: 16,
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva",
    duration: "3:56",
    image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa",
  },
  {
    id: 17,
    title: "Kalank Title Track",
    artist: "Arijit Singh",
    duration: "5:11",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 18,
    title: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh",
    duration: "4:29",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
  },
  {
    id: 19,
    title: "Raabta",
    artist: "Arijit Singh",
    duration: "4:03",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
  },
  {
    id: 20,
    title: "Hawayein",
    artist: "Arijit Singh",
    duration: "4:48",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
  },
];
let render_music = songs
  .map((song) => {
    return `
   <div class="song-card" data-id="${song.id}">
      <div class="card-section">
        <img  src="${song.image}?w=60&h=60&fit=crop&auto=format" alt="${song.title}" loading="lazy" width="60" height="60"
/>
        <div>
          <h2>${song.title}</h2>
          <p>${song.artist}</p>
        </div>
      </div>
      <p class="duration">${song.duration}</p>
    </div>
  `;
  })
  .join("");

let audio = new Audio();

let all_songs = document.querySelector(".all-songs");

all_songs.innerHTML = render_music;

// ================== play pause button ==================== 
let play = document.querySelector(".play");
let playIcon = document.querySelector(".play-icon");


function playPause() {
  if (playIcon.classList.contains("fa-play")) {
    playIcon.classList.replace("fa-play", "fa-pause");
  } else {
    playIcon.classList.replace("fa-pause", "fa-play");
  }
}

play.addEventListener("click", playPause);

let left = document.querySelector(".left");


/* ================== EVENT DELEGATION  ========================= */

all_songs.addEventListener("click", (ele) => {

  // find the nearest song card
  let card = ele.target.closest(".song-card");

  // if click is outside card stop
  if (!card) return;

  // get song id from dataset
  let id = card.dataset.id;

  // find the song in array
  let currentMusic = songs.find(song => song.id == id);

  // update left section
  left.innerHTML = `
      <img src="${currentMusic.image}" loading="lazy" "/>
      <div style="padding:20px">
        <h2>${currentMusic.title}</h2>
        <p>${currentMusic.artist}</p>
      </div>
  `;
});