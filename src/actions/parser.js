export const PARSER_ACTION_TYPES = {
  PARSE: 'parser:parse',
};

export default {
  parse: content => ({
    type: PARSER_ACTION_TYPES.PARSE,
    content,
  }),
};
