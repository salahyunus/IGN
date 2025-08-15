import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("2a3e46f8-8dbc-4e62-a619-b8a808fde6e9");
  }

  render() {
    return null;
  }
}
export default CrispChat;
