import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

export default function Login() {

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // REGISTER
  const handleRegister = async () => {

    const userData = {
      name,
      email,
      password
    };

    try {

      const response = await fetch(
        "http://localhost:8080/api/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Account Created Successfully");

      setIsLogin(true);

    } catch (error) {

      console.log(error);

      alert("Registration Failed");
    }
  };

  // LOGIN
  const handleLogin = async () => {

    const userData = {
      email,
      password
    };

    try {

      const response = await fetch(
        "http://localhost:8080/api/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      console.log(data);

      if (data) {

        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem("userEmail", data.email);

        navigate("/home");

        window.location.reload();

      } else {

        alert("Invalid Credentials");
      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="top-section">

          <h1>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p>
            {isLogin
              ? "Login to continue"
              : "Sign up to get started"}
          </p>

        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {!isLogin && (
            <div className="input-group">

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>
          )}

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        <div className="bottom-text">

          {isLogin ? (
            <>
              Don’t have an account?{" "}

              <span
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}

              <span
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </>
          )}

        </div>

      </div>

    </div>
  );
}