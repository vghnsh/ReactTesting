import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {
    setIsLoading(true);
    // Add a 2-second delay before making the API call
    setTimeout(async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api`);
        setResults(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }, 2000); // 2000 milliseconds (2 seconds)
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        style={{
          marginTop: "2rem",
          marginBottom: "1rem",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: isLoading ? "not-allowed" : "pointer",
          backgroundColor: isLoading ? "#ccc" : "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={handleChange}
        disabled={isLoading}
      >
        Change
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {results &&
            results?.results?.map((user) => (
              <div key={user.login.uuid} style={{ margin: "1rem" }}>
                <img
                  src={user.picture.large}
                  alt="user"
                  style={{ borderRadius: "30%" }}
                />
                <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
                  {user.name.first}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
