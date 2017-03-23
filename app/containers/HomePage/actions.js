import axios from 'axios';
const ROOT_URL = 'https://fitbotdev.rockmyrun.com/v1/';

export function fetchDialog() {

  const request = axios.get(`${ROOT_URL}dialog`);

  return {
    type: 'FETCH_DIALOG',
    payload: request
  };
}
