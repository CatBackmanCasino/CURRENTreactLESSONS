import React from 'react'

function MethodsAsPropsChild(props) {
    return (
        <div>
            <div>
                {props.isLoggedIn ? (
                    <div>
                        <h1>This is heading if true</h1>
                        <ul>
                            <li>First thing</li>
                            <li>second thing</li>
                            <li>Third thing</li>
                        </ul>
                        <button onClick={props.handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <h1>This is heading if false</h1>
                        <button onClick={props.handleSignIn}>Please Sign In</button>
                    </div>
                )}
            </div>
            <div>
                {props.isStrong ? ("Is Strong") : ("Is Not Strong")}
            </div>
        </div>
    )
}

export default MethodsAsPropsChild