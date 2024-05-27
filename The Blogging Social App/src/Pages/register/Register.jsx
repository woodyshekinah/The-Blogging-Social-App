import React from "react";
import "./register.css"

export default function Register() {
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
                        <input type="text" placeholder="Username" className="loginInput" required />
                        <input type="email" placeholder="Email" className="loginInput"  required  />
                        <input type="password" placeholder="Password" className="loginInput" required  />
                        <input type="password" placeholder="Password Again" className="loginInput"  required />
                        <button className="loginButton"><a href="/">Sign Up</a></button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}