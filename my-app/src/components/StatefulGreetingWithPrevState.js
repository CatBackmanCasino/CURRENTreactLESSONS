import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit!",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit!" ? "Enter!" : "Exit!",
            }
        })
    }

    incrament() {
        this.setState((prevState, prevProps)=>{
            return {
                count: prevState.count + 1,
            }
        })
    }

    reset() {
        this.setState((prevState, prevProps)=>{
            return {
                count: 0,
                introduction: "Hello!",
                buttonText: "Exit!",
            }
        })
    }





    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrament()}>Click Me</button>
                <p>You have clicked the button {this.state.count} times</p>
                <button onClick={() => this.reset()}>Reset</button>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;