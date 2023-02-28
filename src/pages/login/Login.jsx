import { useContext, useRef } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
// import {CircularProgress} from "@mui/material"

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFatching, error, dispatch } = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault()
        loginCall({ email:email.current.value, password:password.current.value }, dispatch);
    }
     console.log(user);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Kishansocial</h3>
                    <span className="logindesc">
                        Connect with friends and the world around you on Kishansocial
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginbox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" minLength="6" type="password" required ref={password} className="loginInput" />
                        <button className="loginbutton" type="submit" disabled={isFatching} >{isFatching ? <CircularProgress /> :"Log in"}</button>
                        <span className="loginforgot">Forgon Password</span>
                        <button className="loginRegisterbutton">
                        {isFatching ? <CircularProgress /> :" Create a New Account"}
                           
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
