import { NextPage } from "next";
import { useState } from "react";
import { useAuthHooks } from "../hooks/useAuthHooks";
import Alert from "@mui/material/Alert";
import Link from "next/link";

const Register: NextPage = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    alert: "",
  });
  const { register } = useAuthHooks();

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check if passwords match
    if (state.password !== state.confirmPassword) {
      setState({
        ...state,
        alert: "Passwords do not match!",
      });
      return;
    }

    // Register user through Redux action
    await register(state.email, state.name, state.password);
  };

  return (
    <div>
      {/* Incorrect Credentials Alert */}
      {state.alert !== "" && (
        <Alert
          severity="error"
          onClose={() => setState({ ...state, alert: "" })}
        >
          {state.alert}
        </Alert>
      )}

      {/* Sign up form */}
      <div className="form" style={{ height: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>

          <label>Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Enter your first name..."
            value={state.name}
            required
          />
          <br />

          <label>Email</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Enter your email..."
            value={state.email}
            required
          />
          <br />

          <label>Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Create a password..."
            value={state.password}
            required
          />
          <br />

          <label>Confirm password</label>
          <input
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirm your password..."
            value={state.confirmPassword}
            required
          />
          <br />

          <input type="submit" value="Sign up" />

          <div className="bottom-text">
            <p>Already have an account?</p>
            <Link className="link" href="/login">
              <a>Log In</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
