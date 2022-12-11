import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         isLoggedIn: true,
         isStrong: false
      }
    }
  render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded}/>
        <UserMessage isLoggedIn={this.state.isLoggedIn} isStrong={this.state.isStrong} />
      </div>
    )
  }
}

export default NestingComponents