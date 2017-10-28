import React, {Component} from "react";

class BodyContent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  changeMessage(event) {
    this.setState({message: event.target.value});
  }

  render() {
    let text;
    if (this.state.message.length <= 0) {
      text = "Input any text in the textbox below"
    } else {
      text = this.state.message;
    }
    return (
      <div className="body-content-2 text-center">
        <div>
          <h5>{text}</h5>
          <input className="input" type="text" name="text" onChange={this.changeMessage.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default BodyContent2;
