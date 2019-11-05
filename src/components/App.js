import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../containers/Home';


export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Home />
        <Footer />
      </>
    </Router>
  );
}

