import { AUTH_USER } from '../types';

export default function(store) {
  const token = localStorage.getItem('token');

  // If we have token, consider the user to be authenticated
  if (token) {
    store.dispatch({ type: AUTH_USER });
  }
}
