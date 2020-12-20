import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./components/home";
import GuideLines from "./components/guidelines";

function App() {
  return (
    <Router>
        <Switch>
            <Route component={Home} exact path={"/"} />
            <Route component={GuideLines} exact path={"/guidelines"} />
        </Switch>
    </Router>
  );
}

export default App;
