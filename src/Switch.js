import React, { Component } from "react";
import Switch from "react-switch";

export default class Basic extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (
        <div className="Switch">
          <label htmlFor="normal-switch">
            <span></span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              className="react-switch"
              id="normal-switch"
            />
          </label>
          <p> <span>{this.state.checked ? 'Deactivate' : 'Active'}</span>.</p>
        </div>
      );
    }
  }
  


    