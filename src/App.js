import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  GlobalStyles, lightTheme} from "./styles";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import PetSignup from "./screens/PetSignup";
import Find from "./screens/Find";
import routes from "./routes";



function App() {

  
  return (
    
      <HelmetProvider>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles/>
            <Router>
              <Switch>
                <Route path={routes.home} exact>
                   <Home />
                </Route>
                <Route path={routes.login}>
                   <Login />
                </Route>
                <Route path={routes.signup}>
                   <Signup />
                </Route>
                <Route path={routes.Petsignup}>
                   <PetSignup />
                </Route>
                <Route path={routes.find}>
                   <Find />
                </Route>
                
               
              </Switch>
            </Router>
          </ThemeProvider>
      </HelmetProvider>
    
    );
}

export default App;
