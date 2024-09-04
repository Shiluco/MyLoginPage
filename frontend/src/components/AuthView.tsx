import React, { useState } from "react";
import { signUp, login, logout, updateUser, resetPassword } from "../../service/AuthService";

const AuthView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const data = await signUp(email, password, name, role);
      setMessage("Sign up successful: " + JSON.stringify(data));
    } catch (error) {
      setMessage("Sign up error: " + error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      setMessage("Login successful: " + JSON.stringify(data));
    } catch (error) {
      setMessage("Login error: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setMessage("Logout successful");
    } catch (error) {
      setMessage("Logout error: " + error.message);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const data = await updateUser(email, password, name, role);
      setMessage("Update successful: " + JSON.stringify(data));
    } catch (error) {
      setMessage("Update error: " + error.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      await resetPassword(email);
      setMessage("Password reset email sent");
    } catch (error) {
      setMessage("Reset password error: " + error.message);
    }
  };

  return (
    <div>
      <h1>Auth View</h1>
      <div>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>

      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <h2>Logout</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div>
        <h2>Update User</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button onClick={handleUpdateUser}>Update User</button>
      </div>

      <div>
        <h2>Reset Password</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>

      <div>
        <h3>Message</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AuthView;
