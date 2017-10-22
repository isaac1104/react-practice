import React, {Component} from "react";

class Header extends Component {
  alertText() {
    alert("React says... Hello!");
  }

  render() {
    return (
      <div className="jumbotron text-center" id="jumbo">
        <h1>React Practice Web</h1>
        <h5>React Playground!</h5>
        <button onClick={this.alertText} className="btn btn-success btn-md">Greet!</button>
      </div>
    );
  }
};

export default Header;
