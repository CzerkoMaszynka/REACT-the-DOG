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
          <div>
            <div className="d-flex justify-content-center">
              <select
                className="custom-select custom-select text-success border-success mx-auto my-1 w-50"
                onChange={e => onDropDownClick(e.target.value)}
              >
                {breedList.map(breed => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
            <div className="div-seize d-flex justify-content-center align-items-center mx-auto">
              <div >
                <img
                  className="d-block m-1 my-1 mx-auto rounded img-seize"
                  src={dropDownImgUrl}
                  alt="dog"
                />
              </div>
            </div>
            <button
              className="btn btn-success my-1 mx-auto d-block"
              onClick={onDropDownBtnClick}
            >
              More dogs of this breed
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
           <div className="d-flex justify-content-center">
              <select
                className="custom-select custom-select text-success border-success mx-auto my-1 w-50"
                onChange={e => onDropDownClick(e.target.value)}
              >
                {breedList.map(breed => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
        </>
      );
    }
  }
}

export default BreedDropDown;
