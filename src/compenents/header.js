import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../header.css';



class Header extends Component  {

    render() {
        return (
        
            <div className=" bg-white h-100 my-2">
                <div className="container">
                    <div className="row align-items-center d-flex">
                        <div className="col-0 col-sm-2 col-md-1  ">
                            <Link to="/home"><img src="/imgs/SE_f.png" className="img-fluid d-none d-sm-block" width="40px" height="40px" /></Link>
                        </div>
                        <div className="col-12 col-sm-10 col-md-5 ">
                            <h1>Embroidery Shop</h1>
                        </div>
                        
                        <div className="col-9 col-sm-6 col-md-4 ">
                            <div className="ui right aligned category search">
                                <div className="ui icon input">
                                    <input className="prompt" type="text" placeholder="Search ..." />
                                    <i className="search icon"></i>
                                </div>
                                <div className="results">
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-3 col-sm-6 col-md-2 ">
                            <span className="badge badge-pill badge-danger">{this.props.itemsInCart}</span>
                            <Link to="/Cart"><h1><i className="cart arrow down icon"></i></h1></Link>
                        </div>
                    </div>
                </div>
            </div>
          
        )
    }
}

export default Header;