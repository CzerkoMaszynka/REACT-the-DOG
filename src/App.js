import React, { useState, useCallback } from 'react';

import './App.css';
import DogListAll from './Config/DogBreedsAll';
import SearchBar from './Components/SearchBar';
import BreedList from './Components/BreedList';
import UnderSearchBarImg from './Components/UnderSearchBarImg';
import RandomDog from './Components/RandomDog';
import BreedDropDown from './Components/BreedDropDown';
import NavBar from './Components/NavBar';

const keys = Object.keys(DogListAll);

const initialState = {
  breed: '',
  randomImgUrl: '',
  dropDownImgUrl: '',
  singleImgUrl: []
};

const loaderInitialState = {
  isLoading: false,
  error: null
};

function App() {
  const [appState, setAppState] = useState(initialState);
  //tutaj jest zawarty initialstate
  // const [breed, setBreed] = useState('');
  // const [randomgImgUrl, setRandomgImgUrl] = useState('');
  // const [dropDownImgUrl, setDropDownImgUrl] = useState('');
  // const [singleImgUrl, setSingleImgUrl] = useState([]);
  const [loaderState, setLoaderState] = useState(loaderInitialState);
  //tutaj zawarty jest loaderstate
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = uEeState(null);

  const onInputBreedClick = el => {
    fetch(`https://dog.ceo/api/breed/${el}/images`)
      // .then(res => {
      //   if (res.ok) {
      //     return res.json();
      //   } else {
      //     throw new Error("Something went wrong...");
      //   }
      //   })
      .then(res => res.json())
      .then(data =>
        setAppState({ ...appState, singleImgUrl: data.message, breed: el })
      );
  };

  const onRandomBreedClick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setAppState({ ...appState, randomImgUrl: data.message }));
  };

  const onDropDownClick = breed => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data =>
        setAppState({ ...appState, dropDownImgUrl: data.message, breed: breed })
      );
  };

  const onDropDownBtnClick = useCallback(() => {
    fetch(`https://dog.ceo/api/breed/${appState.breed}/images/random`)
      .then(res => res.json())
      .then(data => setAppState({ ...appState, dropDownImgUrl: data.message }));
  }, [appState]);

  const setDogBreed = useCallback(
    value => {
      setAppState({
        ...appState,
        breed: value
      });
    },
    [appState]
  );

  return (
    <>
      <NavBar />
      <div className='container containerMargin mb-5'>
        <h1 className='text-center'>Hey! Welcome to THE-dog api.</h1>
        <h2 className='text-success text-center w-50 mx-auto'>
          I prepared a couple of simple buttons for you! Those buttons will let
          you generate some cool dog photos.
        </h2>
        <p className='text-center mt-5'>
          First button will let you to generate a random dog from any breed
        </p>
        <RandomDog
          randomImgUrl={appState.randomImgUrl}
          onRandomBreedClick={onRandomBreedClick}
        />
        <p className='text-center mt-5'>
          Here you can select photos of specified breed
        </p>
        <BreedDropDown
          dropDownImgUrl={appState.dropDownImgUrl}
          onDropDownClick={onDropDownClick}
          breed={appState.breed}
          setDogBreed={setDogBreed}
          breedList={keys}
          onDropDownBtnClick={onDropDownBtnClick}
        />
        <p className='text-center mt-5'>
          Type any specific breed in searchbar bellow and see what happens!
        </p>
        <SearchBar breed={appState.breed} onSetDogBreed={setDogBreed} />

        <BreedList
          breed={appState.breed}
          breedList={keys}
          onInputBreedClick={onInputBreedClick}
        />
        <UnderSearchBarImg singleImgUrl={appState.singleImgUrl} />
      </div>
    </>
  );
}

export default App;
