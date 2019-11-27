import React from "react";

const breedStyle = {
  border: "1px solid black",
  backgroundColor: "lightpink",
  cursor: "pointer"
};

export default ({ breed, breedList, onInputBreedClick }) => (
  <div style={{ width: "181px" }}>
    {breedList
      .filter(el => breed !== "" && el.includes(breed))
      .map(el => (
        <div onClick={() => onInputBreedClick(el)} style={breedStyle}>
          {el}
        </div>
      ))}
  </div>
);
