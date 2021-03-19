import React from 'react';
import { GlobalStyle } from './globalStyles';
import { Navbar } from './conponents';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
