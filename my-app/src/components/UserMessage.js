import React from 'react'

function UserMessage(props) {
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
                    </div>
                ) : (
                    <div>
                        <h1>This is heading if false</h1>
                    </div>
                )}
            </div>
            <div>
                {props.isStrong ? ("Is Strong") : ("Is Not Strong")}
            </div>
        </div>
    )
}

export default UserMessage