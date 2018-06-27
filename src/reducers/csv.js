import { CSV_ACTION_TYPES } from '../actions/csv';

const INITIAL_STATE = {
  content: null,
  settings: {
    header: false,
  },
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CSV_ACTION_TYPES.SAVE:
      return {
        ...state,
        content: action.csvContent,
        settings: {
          ...action.settings,
        },
      };
    default:
      return state;
  }
};
