import React, { useState } from "react";
import "./SearchBar.css";



function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const byUserName = data.filter((value) => {
      return value.username.toLowerCase().includes(searchWord.toLowerCase());
    });

    const byNickName = data.filter((value) => {
      return value.nickname.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
   
      setFilteredData(byNickName);
      setFilteredData(byUserName);
     
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
     
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
              <p className="nic">{"username:"}</p>
              <p> {value.username}</p>
                <p className="nic">{"nick:"}</p>
                <p> {value.nickname}</p>
                
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;