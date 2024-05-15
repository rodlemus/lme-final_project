const scheduleDetailsItems = Array.from(
  document.getElementsByClassName("schedule-detail-item")
);

const getMoviesFromDB = async () => {
  return fetch("/public/json/movieDB.json")
    .then((res) => res.json())
    .then((data) => data.movies)
    .catch(console.log);
};
scheduleDetailsItems.forEach((scheduleDetailItem) => {
  scheduleDetailItem.addEventListener("click", () => {
    const movieID = parseInt(scheduleDetailItem.getAttribute("movie-id"));
    const time = scheduleDetailItem.textContent;
    window.location.href = `/cinefilos/movies/movie-details/movie-details.html?movieId=${movieID}&time=${time}`;
  });
});
