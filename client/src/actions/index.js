import axios from 'axios';
import {
  CREATE_BROTHERHOOD,
  ERROR,
  FETCH_BROTHERHOOD,
  FETCH_BROTHERHOODS
} from '../types';

const ROOT_URL = 'http://127.0.0.1:8000/brotherhoods/';

export function fetchBrotherhoods() {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}`)
      .then(response => {
        dispatch({
          type: FETCH_BROTHERHOODS,
          payload: response
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error.response.data.detail
        });
      });
  };
}

export function createBrotherhood(data, callback) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}`, data)
      .then(response => {
        dispatch({
          type: CREATE_BROTHERHOOD,
          payload: response
        });

        callback();
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error.response.data.detail
        });
      });
  };
}
