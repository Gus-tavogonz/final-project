import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Jumbotron />
      
      <Switch>
        <Route exact path="/" component={Articles} />
       
    
      </Switch>
    </div>
  </Router>
);

export default App;
