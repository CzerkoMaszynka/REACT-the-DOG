import React from "react";

class UnderSearchBarImg extends React.Component {
  render() {
    const { singleImgUrl } = this.props;
    // const {isLoading, error} = this.state;
    // if (error) {
    //   return <p>{error.message}</p>
    // }
    // if (isLoading) {
    //   return <p>Loading...</p>;
    // } else {
    return (
      <div>
        {singleImgUrl.map(dogImg => (
          <img className="m-1 imgCover" key={dogImg} src={dogImg} alt="dog" />
        ))}
      </div>
    );
  }
}

export default UnderSearchBarImg;
