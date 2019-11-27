import React from "react";

class SearchBar extends React.Component {
  render() {
    const { breed } = this.props;
    return (
      <input
        autoComplete="off"
        onChange={e => this.props.setDogBreed(e.target.value)}
        value={breed}
        type="text"
        name="dogsearch"
        placeholder="Type breed name e.g. vizsla"
      />
    );
  }
}

export default SearchBar;
