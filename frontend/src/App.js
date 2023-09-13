import React from 'react';

import { Footer, Header, About, Service } from './container';
import { Navbar, Carousel } from './components';

import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Service />
    <Carousel />
    <Footer />
  </div>
);

export default App;