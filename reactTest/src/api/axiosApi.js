import axios from 'axios';
import {baseUrl} from '../consts/consts';

const apiKey = '?api_key=a72c9cd11375413053bccd6b3e6aaefe&language=en-US';

export const instance = axios.create({
  baseURL: baseUrl,
});

export const getMovies = (pageNumber = 1) =>
  instance
    .get(`movie/top_rated${apiKey}&page=${pageNumber}`)
    .then(res => res.data.results);
