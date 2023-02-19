// Featured anime slider
let featuredAnime = document.querySelector('.featured .anime-list');
let featuredPrevBtn = document.querySelector('.featured .prev-btn');
let featuredNextBtn = document.querySelector('.featured .next-btn');

let featuredAnimeCount = featuredAnime.children.length;
let featuredAnimeIndex = 0;

featuredPrevBtn.addEventListener('click', function() {
  if (featuredAnimeIndex > 0) {
    featuredAnimeIndex--;
    featuredAnime.style.transform = `translateX(-${featuredAnimeIndex * 33.33}%)`;
  }
});

featuredNextBtn.addEventListener('click', function() {
  if (featuredAnimeIndex < featuredAnimeCount - 3) {
    featuredAnimeIndex++;
    featuredAnime.style.transform = `translateX(-${featuredAnimeIndex * 33.33}%)`;
  }
});

// Popular anime slider
let popularAnime = document.querySelector('.popular .anime-list');
let popularPrevBtn = document.querySelector('.popular .prev-btn');
let popularNextBtn = document.querySelector('.popular .next-btn');

let popularAnimeCount = popularAnime.children.length;
let popularAnimeIndex = 0;

popularPrevBtn.addEventListener('click', function() {
  if (popularAnimeIndex > 0) {
    popularAnimeIndex--;
    popularAnime.style.transform = `translateX(-${popularAnimeIndex * 33.33}%)`;
  }
});

popularNextBtn.addEventListener('click', function() {
  if (popularAnimeIndex < popularAnimeCount - 3) {
    popularAnimeIndex++;
    popularAnime.style.transform = `translateX(-${popularAnimeIndex * 33.33}%)`;
  }
});