import React from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const styles = {
    "dropdownButton": {
      "position": "relative",
      "display": "inlineBlock",
    },
    "dropDownContent a": {
      "color": "black",
      "padding": "12px",
      "display": "block",
    },
    "dropDownSet": {
      "height": "40px",
      "display": "flex",
      "flexDirection": "row",
    },
    "dropDownContent": {
      "height": "35px",
    },
    "input": {
      "height": "35px",
    },
    "search": {
      "height": "35px",
    },
  };

  const dropDownContent = [
    "All",
    "All Departments",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Explore",
  ];

  return (
    <div className="Header-Vertical-Center-Search">
      <div style={styles.dropDownSet}>
        <select id="dropDownDiv" className="drop">
          {dropDownContent.map((item) => {
            return (
              <option key={item} href=" ">
                {item}
              </option>
            );
          })}
        </select>
        <input type="text" className="input"></input>

        <button className="search">
          <BsSearch></BsSearch>
        </button>
      </div>
    </div>
  );
}
