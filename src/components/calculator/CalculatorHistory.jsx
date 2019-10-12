import React from "react";
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Paper from "@material-ui/core/Paper";
import { StyledTableRow } from "./sub/helper";

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 'inherit',
  },
  body: {
    fontSize: 'inherit',
    cursor: 'pointer',
  },
}))(TableCell);

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    overflowY: 'scroll',
    height: 'inherit',
  },
  header: {
    zIndex: 2,
  }
}));

const CalculatorHistory = ({history, onSelect}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table stickyHeader>
        <TableHead className={classes.header}>
          <TableRow>
            <StyledTableCell align='center'>Amount</StyledTableCell>
            <StyledTableCell align='center'>Months</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          { history.map(data => (
            <StyledTableRow key={`${data.amount}${data.time}`} hover onClick={() => onSelect(data.amount, data.time)}>
              <StyledTableCell align='center'>
                <AttachMoneyIcon
                  fontSize='large'
                />
                {data.amount}
              </StyledTableCell>
              <StyledTableCell align='center'>{data.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

CalculatorHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number,
    time: PropTypes.number,
  })),
};

export default CalculatorHistory;