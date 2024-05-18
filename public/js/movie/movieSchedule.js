const scheduleDetailsItems = Array.from(
  document.getElementsByClassName("schedule-detail-item")
);

scheduleDetailsItems.forEach((scheduleDetailItem) => {
  scheduleDetailItem.addEventListener("click", () => {
    const movieID = parseInt(scheduleDetailItem.getAttribute("movie-id"));
    const time = scheduleDetailItem.textContent;
    window.location.href = `/cinefilos/movies/movie-details/movie-details.html?movieId=${movieID}&time=${time}`;
  });
});
