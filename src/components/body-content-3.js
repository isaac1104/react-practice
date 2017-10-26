import React, {Component} from "react";

class BodyContent3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Click the button below to change the text!",
      buttonText: "Change Text"
    }
  }

  changeText() {
    if (this.state.buttonText === "Change Back") {
      this.setState({text: "Click the button below to change the text!", buttonText: "Change Text"});
    } else {
      this.setState({text: "You changed the text!", buttonText: "Change Back"});
    }
  }

  render() {
    return (
      <div className="body-content-3 text-center">
        <div>
          <h5>{this.state.text}</h5>
          <button onClick={this.changeText.bind(this)} className="btn btn-danger btn-md">{this.state.buttonText}</button>
        </div>
      </div>
    )
  }
}

export default BodyContent3;
