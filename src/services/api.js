import axios from 'axios';

export const fetchImages = async (querry, page) => {
  return await axios.get(`https://pixabay.com/api/?key=31365887-26ab2d64c6ea6999261bbdea7&per_page=12&q=${querry}&page=${page}`);
};