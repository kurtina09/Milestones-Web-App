import React, { Component, useEffect, useState } from "react"
import "./login.css"
import drumBaby from '../../images/drum (2) 1.png'
import abcdTeacher from '../../images/teacher (2) 1.png'
import { useParams, useNavigate, useLocation } from "react-router-dom"
export default function LogIn() {

    
        const [user, setUser] = useState( {
            email:"",
            password:"",
        });
        const {login} = useParams();
        const navigate = useNavigate();
        const handleChange = e =>{
            const {name,value} = e.target
            setUser({
            ...user,
            [name]:value
            })
            }

     function handleClick(){
        if((user.password != "" &&  user.password.length < 20 && user.password.length > 5) && user.email != ""){
             const response = fetch(`http://localhost:3001/login/`, {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                 })
                 .then( result => result.statusText())
                 .then( result =>  window.alert(result))
                 .then(navigate("/"))
                }};

                
    
    useEffect(()=>{
        handleClick();
    },[user]);


//e.preventDefault()

    return (
        <div className="log-in flex-col-hstart-vstart clip-contents">
            <div className="background flex-row-vstart-hstart">
                <div className="rectangle-3">
                    <p className="txt-957">Welcome Back</p>

                    <form className = "login" >

                        <input className="group-467 flex-row-vstart-hstart"
                               type = "email"
                               placeholder = "Email Address"
                               value = {user.email}
                               name="email"
                               onChange={handleChange}                        ></input>
                        <input className="group-075 flex-row-vstart-hstart"
                               type = "password" 
                               placeholder = "Password"
                               value = {user.password}
                               name="password"
                               onChange={handleChange}                        ></input>

                        <input type="checkbox" className ="checkbox"></input>
                        <label for="rmbme" className="txt-195">Remember me</label>
                            

                        <input className="frame-14 flex-row-vstart-hstart"
                               type = "submit"
                               value = "Log In"
                               onClick={(e) => {login()}}
                        ></input>
                    </form>

                    {/* needs account recovery page */}
                    <p className="txt-232">Forgot Password</p>

                    <img
                        src= {abcdTeacher}
                        alt="Not Found"
                        className="teacher-21"
                    />
                    <p className="txt-5107">Don’t have an account yet?</p>
                    <a className="txt-192" href = './register'>Sign Up here!</a>
                </div>
            </div>
            <img
                src={drumBaby}
                alt="Not Found"
                className="drum-21"
            />
            
        </div>
    );
}