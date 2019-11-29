import React from "react";

class RandomDog extends React.Component {
  render() {
    const { randomImgUrl, onRandomBreedClick } = this.props;
    console.log(randomImgUrl);
    if (randomImgUrl === "") {
      return (
        <button
          className="btn btn-success d-block my-1 mx-auto"
          onClick={onRandomBreedClick}
        >
          Random Dog Picture
        </button>
      );
    } else {
      return (
        <div>
          <button
            className="btn btn-success my-1 mx-auto d-block"
            onClick={onRandomBreedClick}
          >
            Random Dog Picture
          </button>
          <div className="div-seize d-flex justify-content-center align-items-center mx-auto">
            <img
              className="d-block m-1 my-1 mx-auto rounded img-seize"
              src={randomImgUrl}
              alt="dog"
            />
          </div>
        </div>
      );
    }
  }
}

export default RandomDog;
