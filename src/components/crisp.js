import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("cd3063a4-b86c-4dc2-bf93-04343da3e8f1");
  }

  render() {
    return null;
  }
}
export default CrispChat;
