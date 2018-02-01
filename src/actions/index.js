import axios from 'axios';

export const FETCH_EPIC = 'fetch_epic';
export const FETCH_APOD = 'fetch_apod';
export const FETCH_IMAGES = 'fetch_images';

const URL_ONE = 'https://api.nasa.gov/EPIC/api/natural?api_key=',
      URL_TWO = 'https://api.nasa.gov/planetary/apod?api_key=',
      API_KEY = 'YuHJuFeAYAgYhUx2lwwwjGhLgVhXDPDOifRaLqOW';

export function fetchEPIC() {
  const epic = axios.get(`${URL_ONE}${API_KEY}`);
  //console.log({epic: epic})
  return {
    type: FETCH_EPIC,
    payload: epic
  }
}

export function fetchAPOD() {
  const apod = axios.get(`${URL_TWO}${API_KEY}`);

  return {
    type: FETCH_APOD,
    payload: apod
  }
}

export function fetchImages() {
  const images = axios.get(`${URL_TWO}${API_KEY}&count=9`);
  //console.log(images);
  return {
    type: FETCH_IMAGES,
    payload: images
  }
}
