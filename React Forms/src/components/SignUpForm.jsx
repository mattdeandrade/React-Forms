import { useState } from "react";

export default function signUp({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [nameLengthError, setNameLengthError] = useState(null);
  async function checkFields(event) {
    if (username.length < 8) {
      setNameLengthError("Your username must be at least 8 characters long!");
      return signUp({ token, setToken });
    }
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sign Up!</h2>
      {nameLengthError && <p>{alert(nameLengthError)}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={checkFields}>
        <label>
          Username:
          <input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  );
}
