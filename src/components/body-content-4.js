import React, {Component} from "react";

class Square extends Component {
  render() {
    var squareStyle = {
      height: 150,
      backgroundColor: this.props.color
    };

    return (
      <div style={squareStyle}></div>
    );
  }
}

class Label extends Component {
  render() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      color: "#353b40"
    };

    return (
      <p style={labelStyle}>{this.props.color}</p>
    );
  }
}

class BodyContent4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    }
  }

  changeColor(event) {
    this.setState({color: event.target.value});
  }

  render() {
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
      <div className="body-content-4 text-center">
        <div>
          <h3>Input any color names or hexcodes</h3>
          <div className="palette">
            <Square color={this.state.color}/>
            <Label color={this.state.color}/>
          </div>
          <input className="input" type="text" name="text" onChange={this.changeColor.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default BodyContent4;
