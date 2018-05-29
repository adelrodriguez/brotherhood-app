import { AUTH_USER, DEAUTH_USER } from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case DEAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state;
  }
}
