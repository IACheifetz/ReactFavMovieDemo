export async function searchMovies(searchQuery) {
  const response = await fetch(`/.netlify/functions/movie-endpoint?searchQuery=${searchQuery}`);
  const data = await response.json();
  return data.results;
}

export async function getSingleMovie(id) {
  const response = await fetch(`/.netlify/functions/single-movie-endpoint?movieId=${id}`);
  const data = await response.json();
  return data;
}
