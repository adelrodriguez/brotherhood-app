import {
  ERROR,
  CREATE_BROTHERHOOD,
  CLEAR,
  DELETE_BROTHERHOOD,
  EDIT_BROTHERHOOD
} from '../types';

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_BROTHERHOOD:
      return {
        ...state,
        message: '¡Has registrado una nueva hermandad!',
        class: 'is-success'
      };
    case EDIT_BROTHERHOOD:
      return {
        ...state,
        message: '¡Has editado una hermandad exitosamente!',
        class: 'is-success'
      };
    case DELETE_BROTHERHOOD:
      return {
        ...state,
        message: '¡Has eliminado una hermandad exitosamente',
        class: 'is-success'
      };
    case ERROR:
      return { ...state, message: action.payload, class: 'is-danger' };
    case CLEAR:
      return { ...state, message: '', class: '' };
    default:
      return state;
  }
}
