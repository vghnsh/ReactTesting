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
    }, 1000); // 2000 milliseconds (2 seconds)
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
        style={{ marginTop: "4rem", marginBottom: "2rem" }}
        onClick={handleChange}
      >
        Change
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {results &&
            results?.results?.map((user) => (
              <div>
                <img src={user.picture.large} alt="user" />
                <p style={{ textAlign: "center" }} key={user.login.uuid}>
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
