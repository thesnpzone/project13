// import './App.css';
import Main from "./components/Main/Main";

import { HashRouter, Switch, Route } from "react-router-dom";

// css links

import "./css/aboutus.css";
import "./css/App.css";
import "./css/contact.css";
import "./css/footer.css";
import "./css/home.css";
import "./css/Project.css";
import "./css/service.css";
import "./css/team.css";

import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import Page4 from "./components/pages/Page4";
import Page5 from "./components/pages/Page5";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Aleart from "./components/Aleart/Aleart";

function App() {
  return (
    <>
      <HashRouter>
        
        <Aleart />

        <Navbar snp="Dream Bulid" />

        <Switch>
          <Route path="/contact">
            <Page5 />
          </Route>

          <Route path="/pricing">
            <Page4 />
          </Route>

          <Route path="/service">
            <Page3 />
          </Route>

          <Route path="/about">
            <Page2 />
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </HashRouter>

      <Footer />
    </>
  );
}

export default App;
