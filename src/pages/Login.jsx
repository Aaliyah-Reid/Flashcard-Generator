import React, { useState } from 'react';
import supabase from "./supabaseClient.js"


function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("carlyonja@gmail.com");
  const [password, setPassword] = useState("guillaume12");
  const [error, setError] = useState(null);

  const login = async () => {
    setLoading(true);
    setError(null);

    

    try {
     
      const { data, error } = await supabase.auth.signUp({
        email: 'carlyonja@gmail.com',
        password: 'skgFYiUsbQHpVFcCvjqO'
      })
      



      if (error) {
        throw error;
      }

      console.log('User:', data);
      console.log('Session:', session);
    } catch (error) {
      console.log("dfdf")
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={login} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
    </div>
  );
}

export default Login;