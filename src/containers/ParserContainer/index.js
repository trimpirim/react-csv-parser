import React from 'react';

import { Grid } from '@material-ui/core';

import { connect } from 'react-redux';

import CSVForm from '../../components/CSVForm';
import csvActions from '../../actions/csv';
import parserActions from '../../actions/parser';
import { dispatch } from '../../store';
import ParsedContent from '../../components/ParsedContent';

class ParserContainer extends React.Component {
  _handleStart = this._handleStart.bind(this);

  _handleStart({
    csvContent, header,
  }) {
    dispatch(csvActions.save({ csvContent, settings: { header } }));
    dispatch(parserActions.parse(csvContent));
  }

  render() {
    const { parsed, header } = this.props;

    return (
      <Grid container spacing={16}>
        <Grid container item justify="center">
          <Grid item xs={4}>
            <CSVForm onSubmit={this._handleStart} />
          </Grid>
        </Grid>
        {parsed && (
          <Grid container item justify="center">
            <Grid item xs={12}>
              <ParsedContent content={parsed} header={header} />
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  original: state.csv.content,
  header: state.csv.settings.header,
  parsed: state.parser.parsed,
});

export default connect(mapStateToProps)(ParserContainer);
