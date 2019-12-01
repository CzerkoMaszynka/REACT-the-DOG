import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar fixed-top navbar-light bg-success">
        <div className="container">
          <a className="navbar-brand text-warning" href="index.html">
            Cute Dogs
          </a>
          <div className="d-flex">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="nav-link text-warning"
                  href="https://github.com/CzerkoMaszynka/REACT-the-DOG"
                >
                  GitHub <span class="sr-only">(current)</span>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="nav-link text-warning"
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
