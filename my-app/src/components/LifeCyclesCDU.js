import React, { Component } from 'react'

export class LifeCyclesCDU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         greeting: 'Hello Pooper'
      }
    }

    updateGreeting = () => {
        this.setState(prevState => {
            return{
                greeting: prevState.greeting === 'Hello Pooper' ? 'Bye, Bye!' : 'Hello Pooper'
            }
        })
    }

    componentDidUpdate() {
        console.log('didUpdate')
    }

    
  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update</button>
      </div>
    )
  }
}

export default LifeCyclesCDU