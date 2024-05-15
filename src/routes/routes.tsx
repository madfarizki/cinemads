import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Saved from "./Saved";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:type/:id" component={Detail} />
        <Route path="/saved" component={Saved} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
