import axios from "axios";
import { useRef } from "react";
import "./register.css"
import {useNavigate} from "react-router"

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history=useNavigate();
    const handleClick = async(e) => {
        e.preventDefault();
        if(password.current.value !==passwordAgain.current.value){
            passwordAgain.current.setCustomValidity("password don'n match");
        }
        else{
            const user={
                username:username.current.value,
                password:password.current.value,
                email:email.current.value,
            }
            try{
             await axios.post("/auth/register",user);  
             history("/login")
            }catch(err){
                console.log(err);
            }
           
        }

    }
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
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" type="email" required ref={email} className="loginInput" />
                        <input placeholder="Password" type="password" minLength="6" required ref={password} className="loginInput" />
                        <input placeholder="Password Again" type="password" required ref={passwordAgain} className="loginInput" />
                        <button className="loginbutton" type="submit">Sing Up</button>

                        <button className="loginRegisterbutton">
                            Log into Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
