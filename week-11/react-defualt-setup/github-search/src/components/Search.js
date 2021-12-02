import React, { useState } from "react";

function Search(props) {
  const [username, setUsername] = useState("");
  const _handleSubmit = (event) => {
    event.preventDefault();
    props.history.push(`/details/${username}`);
  };
  return (
    <div>
      <h2>Search Github by Username</h2>
      <form onSubmit={_handleSubmit}>
        <label>
          Username:
          <input
            type="search"
            onInput={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <button>Search for {username}</button>
      </form>
    </div>
  );
}

export default Search;
