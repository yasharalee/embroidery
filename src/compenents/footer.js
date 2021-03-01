import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="site-footer justify-content">
                <hr/>
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-3 col-sm-6 align-items-center" >
                        <h3>Subscribe to Email</h3>
                        <div className="input-group ">
                                <input type="email" className="form-control my-auto" name="email" placeholder="Enter your Email" />
                            <div className="input-group-append">
                                <button type="submit" name="submit" className="btn btn-primary mt-2 my-auto">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-6">
                        <h2>Contact</h2>
                        <ul className="mx-auto">
                            <a role="button" className="btn btn-link" href="tel:+15032826364"><i className="phone icon"></i> (503) 282-6364</a>{'\n'}
                    <a role="button" className="btn btn-link" href="mailto:stitchworkslloyd@hotmail.com"><i className="envelope outline icon"></i>Email Me</a>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 col-sm-6 align-items-center">
                        <h2>Helpful Info</h2>
                        <ul className="list-unstyled">
                            <a href="#"><li>About us</li></a>
                            <a href="#"><li>FAQ</li></a>
                            <a href="#"><li>Terms and Condition</li></a>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 col-sm-6 align-items-center">
                        <h2>Social</h2>
                        <a className="btn" href="https://www.instagram.com/stitchworkscustomembroidery/" target="blank"><h1><i className="instagram icon"></i></h1></a>
                        <a className="btn" href="https://www.facebook.com/stitchworkslloydcenter/" target="blank"><h1><i className="facebook f icon"></i></h1></a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;