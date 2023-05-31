const searchInput = document.querySelector("#search-input");
searchInput.focus();

const handleSearch = (event) => {
  event.preventDefault();

  const movieCards = document.querySelectorAll(".movie-card");
  const searchKeyword = searchInput.value.toLowerCase();

  movieCards.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    if (title.indexOf(searchKeyword) !== -1) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

const fetchMovieData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&include_adult=false",
    options
  );
  const data = await response.json();
  return data.results;
};

const createMovieCards = async () => {
  const movies = await fetchMovieData();
  const cardList = document.querySelector(".card-list");
  cardList.innerHTML = movies
    .map(
      (movie) => `
        <div class="movie-card" id=${movie.id}>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3 class="movie-title">${movie.title}</h3>
            <p>${movie.overview}</p>
            <p>Rating: ${movie.vote_average}</p>
        </div>`
    )
    .join("");

  cardList.addEventListener("click", ({ target }) => {
    if (target !== cardList) {
      // 카드 외 영역 클릭 시 무시
      if (target.matches(".movie-card")) {
        alert(`영화 id: ${target.id}`);
      } else {
        // 카드의 자식 태그 (img, h3, p) 클릭 시 부모의 id로 접근
        alert(`영화 id: ${target.parentNode.id}`);
      }
    }
  });
};

createMovieCards();
