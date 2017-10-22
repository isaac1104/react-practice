import React, {Component} from "react";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      text: "Click the button below to change the text!",
      buttonText: "Change Text"
    }
  }

  changeMessage(event) {
    this.setState({message: event.target.value});
  }

  changeText() {
    if (this.state.buttonText === "Change Back") {
      this.setState({text: "Click the button below to change the text!", buttonText: "Change Text"});
    } else {
      this.setState({text: "You changed the text!", buttonText: "Change Back"});
    }
  }

  render() {
    let message;
    if (this.state.message.length <= 0) {
      message = "You can change this text dynamically by using the input field below";
    } else {
      message = `${this.state.message}`;
    }

    return (
      <div>
        <div className="content-wrap text-center">
          <div className="body-content-1">
            <div className="image">
              <img src="../../assets/images/react.png"/>
            </div>
          </div>
        </div>
        <div className="body-content-2 text-center">
          <div>
            <h5>{message}</h5>
            <input className="input" type="text" name="text" onChange={this.changeMessage.bind(this)}/>
          </div>
        </div>
        <div className="body-content-3 text-center">
          <div>
            <h5>{this.state.text}</h5>
            <button onClick={this.changeText.bind(this)} className="btn btn-danger btn-md">{this.state.buttonText}</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Body;
