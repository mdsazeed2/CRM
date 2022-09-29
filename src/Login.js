import "./style/Login.css";
import logo from "./logo.jpg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function Signup() {
    navigate("/Signup");
  }
  return (
    <>
      <div className="Login_outer">
        <div className="Login_outer_row1">
          <div className="Login_outer_row11">
            <div className="Login_outer_row11_inner1">
              <img src={logo}/>
              <label>
                <h3>Logo</h3>
              </label>
            </div>
            <div className="Login_outer_row11_inner2">
              <h3>Welcome!</h3>
              <label>Please sign-in to your account</label>
            </div>
            <div className="Login_outer_row11_inner3">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="Login_outer_row11_inner4">
              <input
                type="Password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="Login_outer_row11_inner5">
              <input type="checkbox" />
              <label>Remember me?</label>
              <div className="outer_row11_inner51">
                <label>Forgot Password?</label>
              </div>
            </div>
            <div className="Login_outer_row11_inner6">
              <button className="loginButton">Login</button>
            </div>
          </div>
        </div>
        <div className="Login_outer_row2">
          <label>New member?</label>
          <label className="Login_Sign_Up_text" onClick={Signup}>
            Sign Up
          </label>
        </div>
      </div>
    </>
  );
}
