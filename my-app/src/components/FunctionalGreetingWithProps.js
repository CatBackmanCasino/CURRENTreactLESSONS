import React from "react";

const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello, {props.name}! From what i understand you are  {props.age} years old, has a {props.body} body and {props.poop} poop?</h1>
}


export default FunctionalGreetingWithProps