import React, {useState} from "react";
import LoginBlock from "./LoginBlock";
import SignUpBlock from "./SignUpBlock";

function Header (){

    const [loginWindow, setLoginWindow] = useState(false);
    const [signUpBlock, setSignUpBlock] = useState(false);

    function handleLoginWindow(){
        setLoginWindow(true);
    }

    function handleCloseLogin(){
        setLoginWindow(false);
    }

    function handleSignUpBlock(){
        setSignUpBlock(true);
        setLoginWindow(false);
    }

    function handleCloseSignUp(){
        setSignUpBlock(false);
    }
    

    return (
        <header>
            <div className="button-header" onClick={handleLoginWindow}>login/signup</div>
            {loginWindow && <LoginBlock onSignUpButton={handleSignUpBlock} onCloseLoginButton={handleCloseLogin}/>}
            {signUpBlock && <SignUpBlock onCloseSignUpButton={handleCloseSignUp}/>}

        </header>
    )
}

export default Header;