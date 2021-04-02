import React, { Component } from 'react'
import axios from 'axios'

export default class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff:[]
    }
  }

  render(){
      return (
          <h1>Hello</h1>
      )
  }
}
