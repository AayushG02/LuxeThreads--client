import { useState, useRef } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useSignup } from "../../hooks/useSignup";

import "./Login.css";
import image from "../../assets/login.svg";
import { Link, useLocation } from "react-router-dom";
const Login = () => {
  const formRef = useRef(null);
  const { login, loading, error } = useLogin();
  const { signup, error: signupError } = useSignup();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location =
    useLocation().pathname.split("/")[2].charAt(0).toUpperCase() +
    useLocation().pathname.split("/")[2].slice(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    location === "Login"
      ? await login(email, password)
      : await signup(name, email, password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <img src={image} alt="" />
        </div>
        <div className="login-right">
          <div className="form-container">
            <Link className="link" to="/">
              <h1 className="login-header">LuxeThreads</h1>
            </Link>
            <form ref={formRef} onSubmit={handleSubmit}>
              {location === "Signup" && (
                <div className="floating-label-group">
                  <input
                    type="text"
                    name="name"
                    className="input"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span className="floating-label">Name</span>
                </div>
              )}
              <div className="floating-label-group">
                <input
                  type="email"
                  name="email"
                  className="input"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="floating-label" aria-label="email">
                  Email
                </span>
              </div>
              <div className="floating-label-group">
                <input
                  type="password"
                  name="password"
                  className="input"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="floating-label" aria-label="Password">
                  Password
                </span>
              </div>
              <button className="login-submit" type="submit" disabled={loading}>
                {loading ? "loading..." : location}
              </button>
            </form>
            <p
              className="no-account"
              onClick={() => {
                setEmail("");
                setPassword("");
                setName("");
              }}
            >
              {location === "Login"
                ? "Don't have an account?"
                : "Already have an account? "}{" "}
              <Link to={location === "Login" ? "/auth/signup" : "/auth/login"}>
                {location === "Login" ? "Sign up" : "Login"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div className="login-container">
    //   <div className="login-left">
    //     <img src={image} alt="Register Image" />
    //   </div>
    //   <div className="login-right">
    //     <h1 className="login-header">Log In</h1>
    //     <form onSubmit={handleLogin}>
    //       <div className="floating-label-group">
    //         <input
    //           type="text"
    //           className="login-name"
    //           required
    //           italize="true"
    //           onChange={(e) => setUsername(e.target.value)}
    //         />
    //         <span className="floating-label">Username</span>
    //       </div>

    //       <div className="floating-label-group">
    //         <input
    //           type="password"
    //           className="login-email"
    //           required
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <span className="floating-label">Password</span>
    //       </div>

    //       <span className="forgot">Forgot password?</span>
    //       <button className="login-submit">
    //         {loading ? "Logging in..." : "Login"}
    //       </button>
    //     </form>
    //     <div className="container">
    //       <hr className="hr-text" data-content="or better continue with" />
    //     </div>
    // {/* <div className="login-btn-container">
    //   <div className="login-google">
    //     <GoogleIcon /> Google
    //   </div>
    //   <div className="login-google">
    //     <AppleIcon /> Apple
    //   </div>
    //   <div className="login-google">
    //     <LinkedInIcon /> LinkedIn
    //   </div>
    // </div> */}
    // {/* <span className="no-account">
    //   Don&apos;t have an account? <Link className="link">Sign up</Link>
    // </span> */}
    //   </div>
    // </div>
  );
};

export default Login;
