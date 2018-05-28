import axios from 'axios';
import { CREATE_BROTHERHOOD, ERROR } from '../types';

const ROOT_URL = 'http://127.0.0.1:8000/brotherhoods/';

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
