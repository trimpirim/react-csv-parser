import React from 'react';

import { Field as ReduxFormField, reduxForm } from 'redux-form';
import {
  CardHeader, Card, CardContent, CardActions, Button, FormControl, Grid, FormControlLabel,
} from '@material-ui/core';
import { TextField, Checkbox } from 'redux-form-material-ui';

import { required } from '../../utils/validations';

export const formName = 'csvForm';

const CSVForm = ({
  handleSubmit,
  onSubmit,
}) => {
  const _onSubmit = (form) => {
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <Card>
        <CardHeader title="Paste your CSV here" />
        <CardContent>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              CSV Settings
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={(
                  <ReduxFormField
                    name="header"
                    component={Checkbox}
                  />
                )}
                label="Has header?"
              />
            </Grid>
            <Grid item xs={12}>
              CSV Content
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <ReduxFormField
                  name="csvContent"
                  label="CSV Content"
                  component={TextField}
                  validate={required}
                  multiline
                  fullWidth
                />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableActionSpacing>
          <Button variant="outlined" color="primary" fullWidth type="submit">
            Parse!
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default reduxForm({
  form: formName,
})(CSVForm);
