import React from "react";

function LoginBlock(props){

    return (
        
        <div>
            <div className="content-login"> 
                <div className="closeBtn-login" onClick={props.onCloseLoginButton}>
                    x
                </div>
                <div className="popup-login">
                    <h2>Log In</h2>
                    <div className="input-login">
                        <input type="email" name="Email" placeholder="Email"/>
                    </div>
                    <div className="input-login">
                        <input type="password" name="Password" placeholder="Password"/>
                    </div>
                    <button className="button-login">Log In</button>
                    <p>Don't have an account <span onClick={props.onSignUpButton}>Signup</span></p>
                </div>
            </div>   
        </div>
    )
}

export default LoginBlock;