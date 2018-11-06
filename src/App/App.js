import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import News from '../components/News/News';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Error from '../components/Error';

const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={News} exact />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>
);

export default App;
