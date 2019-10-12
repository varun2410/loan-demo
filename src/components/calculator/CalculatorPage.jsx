import React from 'react';
import './css/calculatorPage.css';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';
import CircularProgress from '@material-ui/core/CircularProgress';
import MySnackbarWrapper from "../Common/Snackbar";

/**
 * Contains all the components of calculator feature
 */
class CalculatorPage extends React.Component {

  state = {
    amount: 500,
    time: 6,
    isResultCalculated: false,
    result: {},
    loading: false,
    showSnackbar: false,
  };

  // Handle what happens on Slider change
  handleSliderChange = (event, newValue, field) => {
    this.setState({
      [field]: newValue,
    });
  };

  // Get value from input field
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value === '' ? '' : parseInt(event.target.value, 10),
    });
  };

  // Reset value in input field when the values are out of range
  handleBlur = () => {
    const { amount, time } = this.state;
    let newAmount = amount;
    let newTime = time;
    if (amount < 500) {
      newAmount = 500;
    } else if (amount > 5000) {
      newAmount = 5000;
    }

    if (time < 6) {
      newTime = 6;
    } else if (time > 24) {
      newTime = 24;
    }

    this.setState({
      amount: newAmount,
      time: newTime,
    })
  };

  // Get the interest value from the backend
  onSubmit = () => {
    const { amount, time } = this.state;
    this.setState({
      loading: true,
    });
    fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${time}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          isResultCalculated: true,
          loading: false,
          result: {
            interestRate: response.interestRate,
            monthlyPayment: response.monthlyPayment.amount,
          }
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          isResultCalculated: false,
          showSnackbar: true,
        })
      })
  };

  onSnackbarClose = () => {
    this.setState({
      showSnackbar: false,
    })
  };

  render() {
    const { amount, time, isResultCalculated, result, loading, showSnackbar } = this.state;
    return (
      <div className='title-wrapper'>
        <h1 className='title-content'>Loan Interest Calculator</h1>
        <div className='calculator-wrapper'>
          <div className='calculator-content'>
            <div className='calculator-content-wrapper'>
              { loading &&
                <div
                  className='result-wrapper loader'
                >
                  <CircularProgress />
                </div>
              }
              { !loading && isResultCalculated &&
                <div
                  className='result-wrapper'
                >
                  <CalculatorResult result={result} />
                </div>
              }
              <CalculatorForm
                value={{amount, time}}
                handleSliderChange={this.handleSliderChange}
                handleInputChange={this.handleInputChange}
                handleBlur={this.handleBlur}
                onSubmit={this.onSubmit}
              />
            </div>
          </div>
          <div className='calculator-sidebar'></div>
          <MySnackbarWrapper
            open={showSnackbar}
            variant='error'
            message='An error occurred in the server.'
            handleClose={this.onSnackbarClose}
            autoHideTime={2000}
          />
        </div>
      </div>
    )
  }
}

export default CalculatorPage;