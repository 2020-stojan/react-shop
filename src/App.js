import React, { useState } from 'react';
import styled from "@emotion/styled";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/header';
import Home from './Views/Home';
import Page from './Views/Page';
import Admin from './Views/Admin';

function App() {

  const [searchVal, setSearchVal] = useState("");

  const search = function (e) {
    setSearchVal(e.target.value);
  }


  return (
    <Router>
      <Header ime={'Stojan'} broj={34} search={search} />

      <Switch>
        <Route path='/' exact render={(props) => (<Home {...props} searchVal={searchVal} />)} />
        <Route path="/product/:id" component={Page} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
