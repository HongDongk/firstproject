import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./routes/Home";
import { useState } from "react";

function Router() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <BrowserRouter>
        <Switch>
            {isLoggedIn ? (
              <>
                <Route exact path="/main">
                    <Home />
                </Route>
              </>
            ) : (
                <Route exact path="/">
                    <Login />
                </Route>
            )}
        </Switch>
      </BrowserRouter>
    );
}

export default Router;
