import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

const App = () => {
  return(
    <div>
      <Navbar/>
      <Header/>
      <Body/>
    </div>
  )
};

ReactDOM.render(
  <App/>, document.querySelector("#app"));
