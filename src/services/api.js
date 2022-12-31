import axios from 'axios';

const API_KEY = '31365887-26ab2d64c6ea6999261bbdea7';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
  image_type: 'photo',
};

export const fetchImages = async (query, page) => {
  return await axios.get(`/?q=${query}&page=${page}&key=${API_KEY}`);
};
