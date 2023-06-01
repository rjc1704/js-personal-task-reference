import { generateMovieCards } from "./movie.js";
import { handleSearch } from "./search.js";

generateMovieCards();

const searchInput = document.querySelector("#search-input");
searchInput.focus();

const form = document.querySelector("#search-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchKeyword = searchInput.value.toLowerCase();
  handleSearch(searchKeyword);
});
