import React from 'react';

import { Footer, Header, About, Service, Flow1, Flow2 } from './container';
import { Navbar, Carousel } from './components';

import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Service />
    <Carousel />
    <br />
    <br />
    <br />
    <div className="head-text"><span>Importance of</span> a Last Will Testament</div>
    <Flow1 />
    <div className="head-text"><span>The Legacy Plan: </span>Solving Estate Liquidity</div>
    <Flow2 />
    <Footer />
  </div>
);

export default App;