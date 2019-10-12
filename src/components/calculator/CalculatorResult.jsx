import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
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
