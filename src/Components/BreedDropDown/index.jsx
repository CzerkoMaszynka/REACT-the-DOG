import React from "react";

class BreedDropDown extends React.Component {
  render() {
    const {
      dropDownImgUrl,
      onDropDownClick,
      breedList,
      onDropDownBtnClick
    } = this.props;
    if (dropDownImgUrl !== "") {
      return (
        <>
          <select onChange={e => onDropDownClick(e.target.value)}>
            {breedList.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <button onClick={onDropDownBtnClick}>Wygeneruj psa</button>
          <img src={dropDownImgUrl} alt="dog" />
        </>
      );
    } else {
      return (
        <>
          <select onChange={e => onDropDownClick(e.target.value)}>
            {breedList.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </>
      );
    }
  }
}

export default BreedDropDown;
