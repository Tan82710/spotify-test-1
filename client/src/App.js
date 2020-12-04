import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login'
import Redirect from './redirect'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
<Router>
<Switch>
  <Route exact path={"/"} render={(props) => <Login/>}/>
  <Route exact path={"/redirect"} component={Redirect} />
</Switch>
</Router>
  );
}

export default App;
