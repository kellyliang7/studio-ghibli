import axios from 'axios';
export const getLocations = () => axios.get("https://ghibliapi.herokuapp.com/locations")
export const getMovies = () => axios.get("https://ghibliapi.herokuapp.com/films")
export const getPeople = () => axios.get("https://ghibliapi.herokuapp.com/people")