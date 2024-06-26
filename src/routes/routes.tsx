import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Saved from "./Saved";
import Search from "./Search";
import Explore from "./Explore";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:query" component={Search} />
        <Route path="/explore/:type" component={Explore} />
        <Route path="/:type/:id" component={Detail} />
        <Route path="/saved" component={Saved} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
