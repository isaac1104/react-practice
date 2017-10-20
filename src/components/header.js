import React, {Component} from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : "This is a website for practicing React"
    }
  }

  changeText() {
    this.setState({text: "This text has been changed!"});
  }

  alertText() {
    alert("Hello React!");
  }

  render() {
    return (
      <div className="jumbotron text-center" id="jumbo">
        <h1>React Practice Web</h1>
        <h3>{this.state.text}</h3>
        <h5>React component are rendered into this webpage</h5>
        <button onClick={this.changeText.bind(this)} className="btn btn-danger btn-md">Change Text</button>
        <button onClick={this.alertText} className="btn btn-success btn-md">Alert Text</button>
      </div>
    );
  }
};

export default Header;
