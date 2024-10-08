import { useState } from "react";

export default function Authenticate({ token, setToken }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [authenticatedUsername, setAuthenticatedUsername] = useState(null);
  async function handleAuthenticate() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      setAuthenticatedUsername(result.data.username);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {authenticatedUsername && <p>Welcome {authenticatedUsername}!</p>}
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleAuthenticate}>Authenticate Token!</button>
    </>
  );
}
