import React from "react";

class SearchBar extends React.Component {
  render() {
    const { breed } = this.props;
    return (
      <div className="d-flex justify-content-center">
        <input
          className="border border-success d-block text-success inptPlaceholder m-1 p-1 w-50 rounded"
          autoComplete="off"
          onChange={e => this.props.setDogBreed(e.target.value)}
          value={breed}
          type="text"
          name="dogsearch"
          placeholder="Type breed name e.g. vizsla"
        />
      </div>
    );
  }
}

export default SearchBar;
