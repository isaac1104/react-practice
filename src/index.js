import React, {Component} from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

//Class component
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Body/>
      </div>
    )
  }
};

//Functional component
// const App = () => {
//   return(
//     <Header/>
//   )
// }

ReactDOM.render(
  <App/>, document.querySelector("#app"));
