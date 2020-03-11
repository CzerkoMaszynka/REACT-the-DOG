import React from 'react';

function UnderSearchBarImg({ singleImgUrl }) {
  // const {isLoading, error} = this.state;
  // if (error) {
  //   return <p>{error.message}</p>
  // }
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // } else {
  return (
    <div style={{ background: '#CEF3C9' }}>
      {singleImgUrl.map(dogImg => (
        <img className='m-1 imgCover' key={dogImg} src={dogImg} alt='dog' />
      ))}
    </div>
  );
}

export default UnderSearchBarImg;
