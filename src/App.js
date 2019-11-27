import React from "react";
import "./App.css";
import DogListAll from "./Config/DogBreedsAll";
import SearchBar from "./Components/SearchBar";
import BreedList from "./Components/BreedList";
import UnderSearchBarImg from "./Components/UnderSearchBarImg";
import RandomDog from "./Components/RandomDog"


const keys = Object.keys(DogListAll);


class App extends React.Component {

  state = {
    breed: "",
    randomImgUrl: "",
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
    .then(data => this.setState({singleImgUrl: data.message, breed:el}))
  };

  onRandomBreedClick = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => this.setState({randomImgUrl: data.message}))
  };

  setDogBreed = value => {
    this.setState({
      breed: value
    });
  };

  render() {
    return (
      <>
        <RandomDog 
          randomImgUrl={this.state.randomImgUrl} 
          onRandomBreedClick={this.onRandomBreedClick}
        />
        <SearchBar breed={this.state.breed} setDogBreed={this.setDogBreed} />
        <BreedList
          breed={this.state.breed}
          breedList={keys}
          onInputBreedClick={this.onInputBreedClick}
        />
        
       {/* { this.state.singleImgUrl[0] &&  <UnderSearchBarImg singleImgUrl={this.state.singleImgUrl[0]} />} */}
       <UnderSearchBarImg singleImgUrl={this.state.singleImgUrl} />
       
      </>
    );
  }
}

export default App;
