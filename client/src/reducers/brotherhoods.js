import _ from 'lodash';
import {
  FETCH_BROTHERHOODS,
  FETCH_BROTHERHOOD,
  CREATE_BROTHERHOOD,
  EDIT_BROTHERHOOD,
  DELETE_BROTHERHOOD
} from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BROTHERHOODS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_BROTHERHOOD:
    case CREATE_BROTHERHOOD:
    case EDIT_BROTHERHOOD:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_BROTHERHOOD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}