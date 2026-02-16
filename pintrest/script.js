const animeCharacters = [
  {
    anime: "Solo Leveling",
    description: "Sung Jinwoo shadow army wallpaper",
    image:
      "https://i.pinimg.com/736x/de/1d/71/de1d7176eb75fc85dd1333ff50e7e25d.jpg",
  },
  {
    anime: "Solo Leveling",
    description: "Epic hunter pose fan art",
    image:
      "https://i.pinimg.com/736x/5b/35/bd/5b35bd928b72d8d921dec48baffeb558.jpg",
  },
  {
    anime: "Dragon Ball Z",
    description: "Goku Super Saiyan 3 transformation",
    image:
      "https://i.pinimg.com/1200x/d0/e4/25/d0e425e3e19e2a90e79e104902112f86.jpg",
  },
  {
    anime: "Dragon Ball Z",
    description: "Vegeta final flash attack",
    image:
      "https://i.pinimg.com/originals/3c/4d/5e/3c4d5e6f7a89012bcd345678.jpg",
  },
  {
    anime: "Naruto",
    description: "Naruto Sage Mode rasengan",
    image:
      "https://i.pinimg.com/1200x/36/62/3d/36623d5622927a872b035cea3ce47e26.jpg",
  },
  {
    anime: "Naruto",
    description: "Sasuke Sharingan eyes closeup",
    image:
      "https://i.pinimg.com/736x/3a/25/12/3a25120661b70f1bf02dbcc143d418a9.jpg",
  },
  {
    anime: "Jujutsu Kaisen",
    description: "Gojo Satoru infinity domain",
    image:
      "https://i.pinimg.com/736x/95/bc/95/95bc95a64f35549119a9fdbaab64f728.jpg",
  },
  {
    anime: "Jujutsu Kaisen",
    description: "Sukuna cursed energy fan art",
    image:
      "https://i.pinimg.com/736x/92/3d/f9/923df953d6bf7c9160457f846e9763b4.jpg",
  },
  {
    anime: "Demon Slayer",
    description: "Tanjiro water breathing stance",
    image:
      "https://i.pinimg.com/736x/6f/a4/46/6fa446c667aed22e26877d55ae96c2e6.jpg",
  },
  {
    anime: "Demon Slayer",
    description: "Nezuko demon form chibi",
    image:
      "https://i.pinimg.com/736x/54/c9/36/54c936ea38aacff0e00e4af0ba1c4439.jpg",
  },
  {
    anime: "Solo Leveling",
    description: "Beru ant king battle scene",
    image:
      "https://i.pinimg.com/1200x/4e/b8/a5/4eb8a50daf7f0915ea6a5ff7b6ad2a05.jpg",
  },
  {
    anime: "Dragon Ball Z",
    description: "Gohan ultimate form vs Cell",
    image:
      "https://i.pinimg.com/736x/84/d4/6e/84d46ece1a7b4f4466ac1de13d24a2a3.jpg",
  },
  {
    anime: "Naruto",
    description: "Team 7 group photo art",
    image:
      "https://i.pinimg.com/1200x/be/d7/d1/bed7d13ed7c5b80ba758d8d827b87494.jpg",
  },
  {
    anime: "Jujutsu Kaisen",
    description: "Yuji Itadori black flash",
    image:
      "https://i.pinimg.com/736x/47/18/93/471893eebb2e1aace7a762671f736ca6.jpg",
  },
  {
    anime: "Demon Slayer",
    description: "Rengoku flame hashira portrait",
    image:
      "https://i.pinimg.com/736x/bc/bb/8f/bcbb8ff8a637f46088d902c69ad87aee.jpg",
  },
  {
    anime: "Solo Leveling",
    description: "System interface overlay art",
    image:
      "https://i.pinimg.com/736x/5b/e9/14/5be9148ab8c1f0896b3b44b6b5285483.jpg",
  },
  {
    anime: "Dragon Ball Z",
    description: "Frieza golden form wallpaper",
    image:
      "https://i.pinimg.com/736x/a2/43/8c/a2438c6c1eb98f9821a85236ca023689.jpg",
  },
  {
    anime: "Naruto",
    description: "Kurama nine tails chakra mode",
    image:
      "https://i.pinimg.com/736x/31/44/80/314480399d0b7f59e9744b7fc1a589b6.jpg",
  },
  {
    anime: "Jujutsu Kaisen",
    description: "Megumi divine dogs shikigami",
    image:
      "https://i.pinimg.com/736x/5e/0b/c4/5e0bc4084bf11c362d53bbd5ee9fbb5d.jpg",
  },
  {
    anime: "Demon Slayer",
    description: "Hashira training group scene",
    image:
      "https://i.pinimg.com/1200x/3a/27/69/3a2769afb1023c33ae66f8b7386d85c3.jpg",
  },
  {
    anime: "Solo Leveling",
    description: "Igris knight summon dynamic",
    image:
      "https://i.pinimg.com/1200x/b3/d3/a1/b3d3a1080c15b71f95b54dbe8ccb3398.jpg",
  },
  {
    anime: "Dragon Ball Z",
    description: "Bardock legendary Super Saiyan",
    image:
      "https://i.pinimg.com/736x/7c/83/07/7c8307859dbc50116486c556d4a3be65.jpg",
  },
];

const masonry = document.getElementById("masonry");
const searchInput = document.querySelector(".searchInput");
const overlay = document.querySelector(".overlay");

function renderCards(animeCharacters) {
  if (animeCharacters.length === 0) {
    masonry.innerHTML = "<h2 style='text-align:center;'>No results found</h2>";
    return;
  }

  masonry.innerHTML = animeCharacters
    .map(
      (item) => `
      <div class="card">
        <img src="${item.image}" alt="${item.description}">
        <div class="cardOverlay"></div>
        <button class="save-btn">Save</button>

        <div class="cardBottom">
        <div class="cardOverlay-text">
        ${item.description}
        </div>
        <button class="share-btn">share</button>
        </div>
      </div>
      `,
    )
    .join("");
}

/* -------------------- Search Function--------------------------*/
function search() {
  let searchValue = searchInput.value.toLowerCase().trim();

  // filter the search
  let filteredData = animeCharacters.filter( (item) =>
      item.anime.toLowerCase().includes(searchValue) ||
      item.description.toLowerCase().includes(searchValue),
  );

  renderCards(filteredData);
}


/* ------------------ Overlay  ----------------------*/
searchInput.addEventListener("focus", () => {
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  searchInput.blur();
});

/* ---------------Search to Input ---------------------*/
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search();
     overlay.style.display = "none";
    searchInput.blur();
  }
});



/* ------------------- first time card load -----------------------*/
renderCards(animeCharacters);
