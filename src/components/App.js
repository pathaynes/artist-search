import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../containers/Home';
import AlbumDeck from '../containers/Album-Deck';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/artist/:id" component={AlbumDeck} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

