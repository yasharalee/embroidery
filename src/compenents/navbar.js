import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                <Link to="/category" className="nav-item nav-link " href="#products">Products</Link>
                <a className="nav-item nav-link " href="#">Customizing</a>
                <a className="nav-item nav-link " href="#">Quets</a>
                <a className="nav-item nav-link " href="#">FAQ</a>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar;