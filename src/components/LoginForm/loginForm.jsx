import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const loginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h2>Login</h2>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't Have An Account <a href="#">Register </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default loginForm;
