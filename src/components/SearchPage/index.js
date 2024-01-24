import React, { useState } from "react";
import "./searchPage.css";

const SearchPage = ({ users, getUser }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const findUser = () => {  
    const inputUser = users.find((user) => user.login === inputText);
    return inputUser;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = findUser();
    if (user) {
      getUser(user);
      setInputText("");
    } else {
        getUser([]);
      console.log("User not found");
    }
  };

  return (
    <div className="searchPage">
      <form className="search-field" onSubmit={handleSubmit}>
        <input
          className="search-text"
          type="text"
          placeholder="Enter GitHub username"
          value={inputText}
          onChange={handleInputChange}
        />
        <button className="submit-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPage;
