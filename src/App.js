import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './App.css';
import CalculatorPage from "./components/calculator/CalculatorPage";

class App extends React.Component {
  render() {
    return (
      <div className='content-wrapper'>
        <Header />
        <React.StrictMode>
          <CalculatorPage />
        </React.StrictMode>
        <Footer />
      </div>
    )
  }
}

export default App;
