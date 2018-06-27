import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import csv from './csv';
import parser from './parser';

export default combineReducers({
  form: reducerForm,
  csv,
  parser,
});
