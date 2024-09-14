import axios from 'axios';

const url = 'http://localhost:5001/grid';


export const fetchPosts = () => axios.get(url);

export const createGrids = (newGrid) => axios.post(url, newGrid); // now refer to actions to create the post

