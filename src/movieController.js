import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

// let movies = [

// ];

export const home = (req, res) => {
  return res.render("index", { pageTitle: "Movie List", movies: getMovies() });
};

export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  return res.render("detail", { pagetitle: "Movie:Detail", movie });
};

export const filterMovie = (req, res) => {
  const {
    query: { year, rating }
  } = req;
  if (year) {
    const movies = getMovieByMinimumYear(year);
    return res.render("index", {
      pageTitle: `Movie year: ${year}`,
      movies
    });
  }
  if (rating) {
    const movies = getMovieByMinimumRating(rating);
    return res.render("index", {
      pageTitle: `Movie rating: ${rating}`,
      movies
    });
  }
};
