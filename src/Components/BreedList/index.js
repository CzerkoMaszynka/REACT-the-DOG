import React from "react";

const SearchBarResults = ({ breed, breedList, onInputBreedClick }) => (
  <div className="d-flex justify-content-center font-weight-bold">
    <div className="d-flex justify-content-center flex-column w-50">
      {breedList
        .filter(el => breed !== "" && el.includes(breed))
        .map(el => (
          <button
            className="btn btn-success text-center my-1 rounded"
            onClick={() => onInputBreedClick(el)}
          >
            {el}
          </button>
        ))}
    </div>
  </div>
);

export default SearchBarResults;
