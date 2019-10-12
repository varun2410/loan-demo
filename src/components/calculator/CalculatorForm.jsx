import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: 40,
  },
  input: {
    width: '100%',
    fontSize: 20,
  },
  inputWrapper: {
    paddingBottom: 50,
  },
  submitButton: {
    fontSize: 15,
  },
  submitButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  }
});

/**
 * Presentational component whose responsibility is to generate input form for calculator component
 *
 * @param value
 * @param handleSliderChange
 * @param handleInputChange
 * @param handleBlur
 * @param onSubmit
 * @returns {*}
 * @constructor
 */
const CalculatorForm = ({value, handleSliderChange, handleInputChange, handleBlur, onSubmit}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inputWrapper}>
        <Typography id='input-slider' variant='h4' gutterBottom>
          Amount
        </Typography>
        <Grid container spacing={2} alignItems='center'>
        <Grid item sm>
          <Slider
            value={typeof value.amount === 'number' ? value.amount : 0}
            onChange={(event, newValue) => handleSliderChange(event, newValue, 'amount')}
            aria-labelledby='input-slider'
            min={500}
            max={5000}
          />
        </Grid>
        <AttachMoneyIcon
          fontSize='large'
        />
        <Grid item>
          <Input
            name='amount'
            className={classes.input}
            value={value.amount}
            margin='dense'
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 100,
              min: 500,
              max: 5000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
      </div>
      <div className={classes.inputWrapper}>
        <Typography id='input-slider' variant='h4' gutterBottom>
          Months
        </Typography>
        <Grid container spacing={2} alignItems='center'>
        <Grid item sm>
          <Slider
            value={typeof value.time === 'number' ? value.time : 0}
            onChange={(event, newValue) => handleSliderChange(event, newValue, 'time')}
            aria-labelledby='input-slider'
            min={6}
            max={24}
          />
        </Grid>
        <DateRangeIcon
          fontSize='large'
        />
        <Grid item>
          <Input
            name='time'
            className={classes.input}
            value={value.time}
            margin='dense'
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 100,
              min: 6,
              max: 24,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
      </div>
      <div className={classes.submitButtonWrapper}>
        <Button
          variant='outlined'
          color='primary'
          size='large'
          className={classes.submitButton}
          onClick={onSubmit}
        >
          Get Details
        </Button>
      </div>
    </div>
  );
};

CalculatorForm.propTypes = {
  /**
   * Vaules of sliders and text fields
   */
  value: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
  }),
  /**
   * Gets called when user changes slider
   *
   * @param {event} event the dom event
   * @param {number} newValue the current slider value
   * @param {string} field which slider was changed
   */
  handleSliderChange: PropTypes.func.isRequired,
  /**
   * Gets called when user types into text box
   *
   * @param {event} event the dom event
   */
  handleInputChange: PropTypes.func.isRequired,
  /**
   * Gets called when users exits text box
   */
  handleBlur: PropTypes.func.isRequired,
  /**
   * Gets called when user submits the form
   */
  onSubmit: PropTypes.func.isRequired,
};

export default CalculatorForm;