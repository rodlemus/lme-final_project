const urlParams = new URLSearchParams(window.location.search);
const movieID = parseInt(urlParams.get("movieId"));

const getMoviesFromDB = async () => {
  return fetch("/public/json/movieDB.json")
    .then((res) => res.json())
    .then((data) => data.movies)
    .catch(console.log);
};

const getCurrentMovieById = async () => {
  const data = await getMoviesFromDB();
  const movieResult = data.filter((movie) => movie.movieID === movieID);

  if (movieResult.length === 0) {
    window.location.href =
      "/cinefilos/movies/movies-schedule/movies-schedule.html?section=moviesSchedule";
  }

  return movieResult[0];
};

const loadDataMovie = async () => {
  const {
    trailerBackgroundImage,
    movieImage,
    title,
    director,
    actors,
    sinopsis,
  } = await getCurrentMovieById();
  const movieTrailerBackgroundImg = document.getElementById("movie-trailer-bg");
  const movieImageElement = document.getElementById("movie-image");
  const movieTitleElement = Array.from(
    document.getElementsByClassName("movie-title")
  );
  const movieDirectorElement = document.getElementById("movie-director");
  const movieActorsElement = document.getElementById("movie-actors");
  const movieSipnopsisElement = document.getElementById("movie-sipnopsis");

  movieTrailerBackgroundImg.setAttribute("src", trailerBackgroundImage);
  movieImageElement.setAttribute("src", movieImage);
  movieTitleElement.forEach((titleElemt) => (titleElemt.textContent = title));
  movieDirectorElement.textContent = `${director}.`;
  movieActorsElement.textContent = `${actors.join(", ")}.`;
  movieSipnopsisElement.textContent = `${sinopsis}.`;
};

const getRandomInteger = (min = 10, max = 23) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomMinute = () => {
  const minutes = ["00", "15", "30", "45"];
  const randomIndex = Math.floor(Math.random() * minutes.length);
  return minutes[randomIndex];
};

const generateRandomSpans = (container) => {
  for (let i = 0; i < getRandomInteger(1, 6); i++) {
    const span = document.createElement("span");
    span.className = "badge bg-light text-dark p-2";
    const randomTime = `${getRandomInteger(10, 23)}:${getRandomMinute()}`;
    span.textContent = randomTime;
    container.appendChild(span);
  }
};

const schedulesContainers = Array.from(
  document.getElementsByClassName("schedules-container")
);
schedulesContainers.forEach((container) => {
  generateRandomSpans(container);
});
loadDataMovie();
