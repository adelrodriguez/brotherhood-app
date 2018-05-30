import axios from 'axios';
import {
  CREATE_BROTHERHOOD,
  FETCH_BROTHERHOODS,
  DELETE_BROTHERHOOD,
  EDIT_BROTHERHOOD,
  AUTH_USER,
  DEAUTH_USER,
  ERROR,
  CLEAR
} from './types';

const ROOT_URL = 'http://127.0.0.1:8000/brotherhoods/';
const AUTH_URL = 'http://127.0.0.1:8000/api-token-auth/';
const authorization = `JWT ${localStorage.getItem('token')}`;

export function fetchBrotherhoods() {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}`, {
        headers: { authorization: `JWT ${localStorage.getItem('token')}` }
      })
      .then(response => {
        dispatch({ type: FETCH_BROTHERHOODS, payload: response });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error.response.data.detail });
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

export function editBrotherhood(id, data, callback) {
  return function(dispatch) {
    axios
      .put(`${ROOT_URL}${id}/`, data, { headers: { authorization } })
      .then(response => {
        dispatch({ type: EDIT_BROTHERHOOD, payload: response });

        callback();
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error.response.data.detail });
      });
  };
}

export function deleteBrotherhood(id, callback) {
  return function(dispatch) {
    axios
      .delete(`${ROOT_URL}${id}/`, { headers: { authorization } })
      .then(response => {
        dispatch({ type: DELETE_BROTHERHOOD, payload: id });

        callback();
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error.response.data.detail });
      });
  };
}

export function login(user, callback) {
  return function(dispatch) {
    // Submit email/password to the server
    axios
      .post(`${AUTH_URL}`, user)
      .then(response => {
        dispatch({ type: AUTH_USER });

        // Save the token to localStorage for future reference
        localStorage.setItem('token', response.data.token);
        callback();
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: 'Usuario y/o contraseña incorrectos'
        });
      });
  };
}

export function clearAlert() {
  return { type: CLEAR };
}

export function logout() {
  localStorage.removeItem('token');

  return { type: DEAUTH_USER };
}
