import React from "react";

function SignUpBlock(props){
    return (
        
        <div>
            <div className="content-login"> 
                <div className="closeBtn-login" onClick={props.onCloseSignUpButton}>
                    x
                </div>
                <div className="popup-login">
                    <h2>Sign Up</h2>
                    <div className="input-login">
                        <input type="email" name="Email" placeholder="Email"/>
                    </div>
                    <div className="input-login">
                        <input type="password" name="Password" placeholder="Password"/>
                    </div>
                    <div className="input-login">
                        <input type="password" name="Password" placeholder="Confirm Password"/>
                    </div>
                    <button className="button-login">Register</button>
                </div>
            </div>   
        </div>
    )
}

export default SignUpBlock