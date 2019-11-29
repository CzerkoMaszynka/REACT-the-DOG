import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar fixed-top navbar-light bg-success">
        <div className="container">
          <a class="navbar-brand" href="index.html">
            THE-dog
          </a>
          <div className="d-flex">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  class="nav-link"
                  href="https://github.com/CzerkoMaszynka/REACT-the-DOG"
                >
                  GitHub <span class="sr-only">(current)</span>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  class="nav-link"
                  href="https://app.netlify.com/teams/czerkomaszynka/sites"
                >
                  More of my projects <span class="sr-only">(current)</span>
                </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
