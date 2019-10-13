import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableRow, Table, TableHead, TableBody, TableCell, Paper } from "@material-ui/core";
import { StyledTableRow } from "./sub/helper";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 'inherit',
  },
  body: {
    fontSize: 'inherit',
  },
}))(TableCell);

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
}));

const CalculatorResult = ({result}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Interest (%)</StyledTableCell>
            <StyledTableCell align='center'>Monthly Payment</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align='center'>{result.interestRate}</StyledTableCell>
            <StyledTableCell align='center'>
              <AttachMoneyIcon
                fontSize='large'
              />
              {result.monthlyPayment}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

CalculatorResult.propTypes = {
  result: PropTypes.shape({
    interestRate: PropTypes.number.isRequired,
    monthlyPayment: PropTypes.number.isRequired,
  })
};

export default CalculatorResult;
