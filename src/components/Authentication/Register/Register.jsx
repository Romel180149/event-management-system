/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Login/Login.css";
import { useContext } from "react";
import { AuthContext } from "../../../Hook/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("Password must be at least six characters and don't have a capital letter and don't have a special character.");
    } else {
      setError("");
      signUp(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("Registration successful!"); // Show a success toast
        })
        .catch((err) => {
          console.log(err.message);
          setError("Registration failed. Please try again."); // Set error message for registration failure
        });
    }
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
          <button onClick={handleRegister} className="Login-btn">
            Register
          </button>
          <div className="login-btns">
            <button className="google-btn">Google Login</button>
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

export default Register;