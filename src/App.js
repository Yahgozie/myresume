import "./App.css";
import { Container, Grid } from "@material-ui/core";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content containerShadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
