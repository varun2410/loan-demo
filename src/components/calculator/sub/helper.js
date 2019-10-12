import { withStyles} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";

export const setLocalStorageValue = (amount, time) => {
  let storageValue = localStorage.getItem('LoanQueryHistory');
  if (storageValue) {
    storageValue = JSON.parse(storageValue);
    const existingValue = storageValue.filter(value => value.amount === amount && value.time === time);
    if (existingValue.length) {
      return;
    }
  } else {
    storageValue = [];
  }
  storageValue.push({amount, time});
  localStorage.setItem('LoanQueryHistory', JSON.stringify(storageValue));
};

export const getLocalStorageValue = () => {
  let storageValue = localStorage.getItem('LoanQueryHistory');
  if (storageValue) {
    return JSON.parse(storageValue);
  }
  return null;
};

export const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);