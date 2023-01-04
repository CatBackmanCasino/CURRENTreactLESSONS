import React, { Component } from 'react'

export class LifeCyclesCDM extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: 'Loading...'
      }
    }

    getData() {
        setTimeout(() =>{
            this.setState({
                data: 'Loading Complete'
            })
        }, 3000)
    }

    componentDidMount(){
        this.getData()
    }
  render() {
    return (
      <div>{this.state.data}</div>
    )
  }
}

export default LifeCyclesCDM