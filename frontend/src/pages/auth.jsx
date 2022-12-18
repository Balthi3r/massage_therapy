import React from "react";
import "./auth.css"

const Auth = ()=>{
    return(
        <div className="auth">
            <div className="Webname">
                <h1>Wish</h1>
            </div>
            <login/>
        </div>
    )
}
function login(){
    return(
        <div>
            <form className="infoform">
                <h3>Log In</h3>

                <div>
                    <input type="text" placeholder="username" className="infoinput" name="username"/>
                </div>
                <div>
                    <input type="password" placeholder="password" className="infoinput" name="password"/>
                </div>
                <div>
                    <span>register here</span>
                    <button className="login button">Login</button>
                </div>
            </form>
        </div>
    )
}
function signup(){
    return(
        <div className="signup">
            <form className="signupform">
                <h3>Sign up</h3>
                <div>
                <input type="text" placeholder="first name" className="infoinput" name="first name"/>
                <input type="text" placeholder="last name" className="infoinput" name="lastname"/>
                </div>
                <div>
                <input type="text" placeholder="username" className="infoinput" name="username"/>
                </div>
                <div>
                <input type="text" placeholder="password" className="infoinput" name="password"/>
                <input type="text" placeholder="confirm password" className="infoinput" name="confirmpassword"/>
                <span>Login</span>
                    <button className="login button">Signup</button>
                </div>
            </form>
        </div>
    )
}
export default Auth;