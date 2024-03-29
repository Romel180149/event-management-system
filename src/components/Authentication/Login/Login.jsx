/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Hook/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const location = useLocation();
  const navigate = useNavigate();
  const prevLocation = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { googleSignIn, user, signIn } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => console.log(result.user));
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password can not be empty");
      return;
    }

    signIn(email, password)
      .then((result) => {
        console.log(prevLocation);
        console.log(location);
        console.log(navigate);
        navigate(from, { replace: true });
        console.log(result.user);
        toast.success("Login successful!"); // Show a success toast
      })
      .catch((err) => {
        console.log(err.message);
        setError("Email or password is incorrect"); // Set error message for email/password mismatch
      });
  };

  return (
    <div>
      <div className="login-container">
        <div>
          {error && <p className="error">{error}</p>}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="email"
            placeholder="Type Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            type="password"
            placeholder="Type Password"
          />
          <button onClick={handleLogin} className="Login-btn">
            Login
          </button>
          <div className="login-btns">
            <button onClick={handleGoogleLogin} className="google-btn ">
              Google Login
            </button>
          </div>
        </div>
        <div className="login-img">
          <img
            src="https://i.ibb.co/JtcDXq5/undraw-Mobile-login-re-9ntv.png"
            alt=""
          />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Login;
