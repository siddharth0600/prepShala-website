import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          {/* <Route path="/search">
            <SearchPage />
          </Route> */}

          <Route path="/">
            {/* Home route should always be at the bottom */}
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>

      {/* Header */}

      {/* Banner */}
    </div>
  );
}

export default App;
