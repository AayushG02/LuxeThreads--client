import { useState, useRef } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useSignup } from "../../hooks/useSignup";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userReducer";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

import "./Login.css";
import image from "../../assets/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const formRef = useRef(null);
  const { login, loading, error } = useLogin();
  const { signup, error: signupError } = useSignup();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location =
    useLocation().pathname.split("/")[2].charAt(0).toUpperCase() +
    useLocation().pathname.split("/")[2].slice(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    location === "Login"
      ? await login(email, password)
      : await signup(name, email, password);
  };
  const handleGoogleLogin = async (googleUser) => {
    const user = jwtDecode(googleUser.credential);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/googleLogin`,
        { email: user.email, name: user.name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(setUser(res.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
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
              <h1 className="login-header">{location}</h1>
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
            <div className="container">
              <hr className="hr-text" data-content="or better continue with" />
            </div>
            <div className="google-login">
              <GoogleLogin
                clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
                onSuccess={(res) => handleGoogleLogin(res)}
                onError={(err) => console.log(err)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
