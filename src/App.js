import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Error from "./Error";
import '../src/stylesheet.css';
import '../src/components/CSS/home.css';
import '../src/components/CSS/responsive.css';
import '../src/font/stylesheet.css'
import ScrollToTop from "./ScrollToTop";
import { Contact } from "./Contact";
import { About } from "./About";
import { Undermaintaince } from "./Undermaintaince";
import { Products } from "./Products";
import { Details } from "./Details";
import { Plants } from "./Plants";
import { Clientle } from "./Clientle";
import { Career } from "./Career";
import { Nsrealty } from "./Nsrealty";
import { ESG } from "./ESG";
import { Service } from "./Service";
import { Premixx } from "./Premixx";
import { ReadyToUseConc } from "./ReadyToUseConc";

const App = () => {
  return (
    <>
    <Router>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Home}></Route>      
        <Route exact path="/about-nsarcus" component={About}></Route>
        <Route exact path="/products/:slug/" component={Products}></Route>
        <Route exact path="/products/:slug1/:slug2" component={Details}></Route>
        <Route exact path="/services/:slug/" component={Service}></Route>
        <Route exact path="/plants" component={Plants}></Route>
        <Route exact path="/clients" component={Clientle}></Route>  
        <Route exact path="/career" component={Career}></Route>      
        <Route exact path="/real-estate" component={Nsrealty}></Route>
        <Route exact path="/contact-us" component={Contact}></Route>
        <Route exact path="/gallery" component={ESG}></Route>
        <Route exact path="/under-construction" component={Undermaintaince}></Route>
        <Route exact path="/concrete/premixx" component={Premixx}></Route>
        <Route component={Error}></Route>
      </Switch>
      </Router>
    </>
  );
};

export default App;