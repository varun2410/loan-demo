import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='content-wrapper'>
        <Header />\
        <Footer />
      </div>
    )
  }
}

export default App;
