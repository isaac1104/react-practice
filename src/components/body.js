import React, {Component} from "react";
import BodyContent1 from "./body-content-1.js";
import BodyContent2 from "./body-content-2.js";
import BodyContent3 from "./body-content-3.js";
import BodyContent4 from "./body-content-4.js";

class Body extends Component {
  render() {
    return (
      <div className="content-wrap text-center">
        <BodyContent1/>
        <BodyContent2/>
        <BodyContent3/>
        <BodyContent4/>
      </div>
    );
  }
};

export default Body;
