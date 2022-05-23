export async function searchMovies(someString) {
  const response = await fetch(`/.netlify/functions/movies-endpoint?searchQuery=${someString}`);
  const data = await response.json();

  return data;

}

export async function getSingleMovie(id) {
  const response = await fetch(`/.netlify/functions/single-movie-endpoint?movieId=${id}`);
  const data = await response.json();

  return data;


}