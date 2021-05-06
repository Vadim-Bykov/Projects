import {Dimensions} from 'react-native';

const win = Dimensions.get('window');

export const h = win.height;
export const w = win.width;

export const baseUrlImage = 'http://image.tmdb.org/t/p/';

export const baseUrl = 'https://api.themoviedb.org/3/';
