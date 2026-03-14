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