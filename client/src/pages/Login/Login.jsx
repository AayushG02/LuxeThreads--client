import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

import "./Login.css";
import image from "../../assets/login.svg";
const Login = () => {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <img src={image} alt="" />
        </div>
        <div className="login-right">
          <div className="form-container">
            <h1 className="login-header">LuxeThreads</h1>
            {/* <p className="login-subheader">Log in</p> */}
            <form onSubmit={handleLogin}>
              <div className="floating-label-group">
                <input
                  type="email"
                  name="email"
                  className="login-email"
                  required
                  autoCapitalize="true"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="floating-label">Email</span>
              </div>
              <div className="floating-label-group">
                <input
                  type="password"
                  name="password"
                  className="login-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="floating-label">Password</span>
              </div>
              <button className="login-submit" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
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
    //           autoCapitalize="true"
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
