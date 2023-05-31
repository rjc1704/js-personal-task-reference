export const handleSearch = (event, searchKeyword) => {
  event.preventDefault();

  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    if (title.indexOf(searchKeyword) === -1) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
};
