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
    return (
      <div className="body-content-2 text-center">
        <div>
          <h3>Input Text Below</h3>
          <h5>{this.state.message}</h5>
          <input className="input" type="text" name="text" onChange={this.changeMessage.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default BodyContent2;
