export const CSV_ACTION_TYPES = {
  SAVE: 'csv:save',
};

export default {
  save: ({ csvContent, settings }) => ({
    type: CSV_ACTION_TYPES.SAVE,
    csvContent,
    settings,
  }),
};
