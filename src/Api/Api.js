import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e2d541c178ad563b5f474e77e946ef9b';

export const getPopularFilm = async () => {
  const fetchAPI = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  const data = await fetchAPI.data;
  return data;
};
  
export const getInfoByFilm = async (id) => {
  const fetchAPI = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await fetchAPI.data;
  return data;
};

export const searchMoviesbyName = async (query) => {
  const fetchAPI = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const data = await fetchAPI.data;
  return data;
};

export const getMovieCredits = async (id) => {
  const fetchAPI = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const data = await fetchAPI.data;
  return data;
};

export const getMovieReviews = async (id) => {
  const fetchAPI = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await fetchAPI.data;
  return data;
};