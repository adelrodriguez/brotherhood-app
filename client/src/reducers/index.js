import { combineReducers } from 'redux';

// Reducers
import { reducer as form } from 'redux-form';
import brotherhoods from './brotherhoods';
import alerts from './alerts';

const rootReducer = combineReducers({
  form,
  brotherhoods,
  alerts
});

export default rootReducer;