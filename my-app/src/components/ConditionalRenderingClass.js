import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         isLoggedIn: true,
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? "Data Loaded" : "Loading..."}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <h1>This is heading if true</h1>
                <button>Click Me</button>
            </div>
        ) : (
            <div>
                <h1>This is heading if false</h1>
            </div>
        )}
      </div>
    )
  }
}

export default ConditionalRenderingClass