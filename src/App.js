import React from "react"
import { Route, Switch} from "react-router-dom"

import Home from "./components/Home/Home";
import Match3 from "./components/Match3/Match3";
import Match5 from "./components/Match5/Match5";

function App() {
    return (
      <div>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Match3} path="/match3" />
          <Route component={Match5} path="/match5" />
        </Switch>
      </div>
    );
  }
  
export default App;