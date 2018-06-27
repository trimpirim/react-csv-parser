import { PARSER_ACTION_TYPES } from '../actions/parser';
import { parseCSV } from '../utils/parser';

const INITIAL_STATE = {
  parsed: null,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case PARSER_ACTION_TYPES.PARSE:
      return {
        ...state,
        parsed: parseCSV(action.content),
      };
    default:
      return state;
  }
};
