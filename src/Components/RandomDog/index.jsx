import React from "react";

class RandomDog extends React.Component {
  render() {
    const { randomImgUrl, onRandomBreedClick } = this.props;
    console.log(randomImgUrl);
    if (randomImgUrl === "") {
      return <button onClick={onRandomBreedClick}>Wygeneruj zdjęcie</button>;
    } else {
      return (
        <>
        <button onClick={onRandomBreedClick}>Wygeneruj zdjęcie</button>
        <img src={randomImgUrl} alt="dog" />
        </>
      );
    }
  }
}

export default RandomDog