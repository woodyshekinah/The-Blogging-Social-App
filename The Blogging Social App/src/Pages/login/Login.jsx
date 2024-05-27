import React from "react";
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Snapgram</h3>
                    <span className="loginDesc">Connect with friends and the world around you using Snapgram</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <p><a href="/">Back</a></p>
                        <input type="email" placeholder="Email" className="loginInput"  required />
                        <input type="password" placeholder="Password" className="loginInput"  required />
                        <button className="loginButton"><a href="/">Log In</a></button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton"><a href="/register">Create a New Account</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}