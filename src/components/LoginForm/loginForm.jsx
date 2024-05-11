import React from "react";
import "./LoginForm.css";

const loginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h2>Login</h2>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="input-forgot">
          <label>
            {" "}
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
