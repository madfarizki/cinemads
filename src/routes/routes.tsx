import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:type/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
