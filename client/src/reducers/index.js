import { combineReducers } from 'redux';

// Reducers
import { reducer as form } from 'redux-form';
import brotherhoods from './brotherhoods';
import alerts from './alerts';
import auth from './auth';

const rootReducer = combineReducers({
  form,
  brotherhoods,
  alerts,
  auth
});

export default rootReducer;