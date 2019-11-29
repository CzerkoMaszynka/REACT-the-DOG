import React from "react";
import "./App.css";
import DogListAll from "./Config/DogBreedsAll";
import SearchBar from "./Components/SearchBar";
import BreedList from "./Components/BreedList";
import UnderSearchBarImg from "./Components/UnderSearchBarImg";
import RandomDog from "./Components/RandomDog";
import BreedDropDown from "./Components/BreedDropDown";
import NavBar from "./Components/NavBar"

const keys = Object.keys(DogListAll);

class App extends React.Component {
  state = {
    breed: "",
    randomImgUrl: "",
    dropDownImgUrl: "",
    singleImgUrl: [],
    isLoading: false,
    error: null
  };

  onInputBreedClick = el => {
    fetch(`https://dog.ceo/api/breed/${el}/images`)
      // .then(res => {
      //   if (res.ok) {
      //     return res.json();
      //   } else {
      //     throw new Error("Something went wrong...");
      //   }
      //   })
      .then(res => res.json())
      .then(data => this.setState({ singleImgUrl: data.message, breed: el }));
  };

  onRandomBreedClick = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => this.setState({ randomImgUrl: data.message }));
  };

  onDropDownClick = breed => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data =>
        this.setState({ dropDownImgUrl: data.message, breed: breed })
      );
  };

  onDropDownBtnClick = () => {
    fetch(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
      .then(res => res.json())
      .then(data => this.setState({ dropDownImgUrl: data.message }));
  };

  setDogBreed = value => {
    this.setState({
      breed: value
    });
  };

  render() {
    return (
      <>
          <NavBar />
          <div className="container containerMargin mb-5">
            <h1 className="text-center">Hey! Welcome to THE-dog api.</h1>
            <h2 className="text-success text-center w-50 mx-auto">I prepared a couple of simple buttons for you! Those buttons will let you to generate some cool dog photos</h2>
            <p className="text-center mt-5">First button will let you to generate a random dog from any breed</p>
            <RandomDog
              randomImgUrl={this.state.randomImgUrl}
              onRandomBreedClick={this.onRandomBreedClick}
            />
            <p className="text-center mt-5">Here you can select photos of specified breed</p>  
            <BreedDropDown
              dropDownImgUrl={this.state.dropDownImgUrl}
              onDropDownClick={this.onDropDownClick}
              breed={this.state.breed}
              setDogBreed={this.setDogBreed}
              breedList={keys}
              onDropDownBtnClick={this.onDropDownBtnClick}
            />
             <p className="text-center mt-5">Type any specific breed in searchbar bellow and see what happens!</p>
            <SearchBar
              breed={this.state.breed}
              setDogBreed={this.setDogBreed}
            />
           
            <BreedList
              breed={this.state.breed}
              breedList={keys}
              onInputBreedClick={this.onInputBreedClick}
            />
            <UnderSearchBarImg singleImgUrl={this.state.singleImgUrl} />
          </div>
      </>
    );
  }
}

export default App;
