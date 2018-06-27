import React from 'react';

import {
  CardHeader, Card, CardContent, Grid, Table, TableCell, TableRow, TableBody, withStyles, TableHead,
} from '@material-ui/core';

export const formName = 'csvForm';

const styles = theme => ({
  tableWrapper: {
    overflowX: 'auto',
  },
});

export const Cell = ({
  cell,
}) => (
  <TableCell>
    <div style={{ whiteSpace: 'pre' }}>
      {cell}
    </div>
  </TableCell>
);

export const Row = ({
  cells, index,
}) => {
  if (!cells) {
    return null;
  }

  return (
    <TableRow key={index}>
      {cells.map((cell, cellIndex) => (
        <Cell cell={cell} key={cellIndex} />
      ))}
    </TableRow>
  );
};


const Rows = ({
  rows,
  classes,
  header,
}) => {
  let headerRow = null;
  if (header && rows.length > 0) {
    [headerRow, ...rows] = rows;
  }
  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <div className={classes.tableWrapper}>
          <Table>
            {headerRow && (
            <TableHead>
              <Row cells={headerRow} key={0} index={0} />
            </TableHead>
            )}
            <TableBody>
              {rows.map((cells, index) => (
                <Row cells={cells} key={index} index={index} />
              ))}
            </TableBody>
          </Table>
        </div>
      </Grid>
    </Grid>
  );
};

export const RowsWithStyles = withStyles(styles)(Rows);

const ParsedContent = ({
  content,
  header,
}) => (
  <Card>
    <CardHeader title="Parsed CSV" />
    <CardContent>
      <Grid container spacing={16}>
        <Grid item xs={12}>
            Parsed Content
        </Grid>
        <Grid item xs={12}>
          <RowsWithStyles rows={content} header={header} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
export default ParsedContent;
