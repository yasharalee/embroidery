import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';



class ShoppingArr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statesArr: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU',
                'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT',
                'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR',
                'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'],
            cartArray: this.props.cartArray,
            itemquantity: 0,
        };
        
    };


  

   
    render() {
        const uniqCart = [...new Set(this.state.cartArray)];

        
        const cartBox = uniqCart.map(cartitem => {
            return (
                <div className="row " key={cartitem.mainItemId + (Math.random() + Math.random() - Math.random())}>
                    <div className="col-2" >
                        <Link to={`/category/${cartitem.mainItemId}`}>
                            <img src={baseUrl+cartitem.mainImage} width="30px" height="30px" alt={cartitem.name} />
                        </Link>
                    </div>
                    <div className="col-3">
                        <FormGroup>
                            <Input type="number"  max={cartitem.quantity} />
                        </FormGroup>
                    </div>
                    <div className="col-2">
                        <button type="button" name="delbut" id="delbut" className="btn btn-danger">Delete</button>
                    </div>
                </div>
            )
        });

        

        const stateoptions = this.state.statesArr.map(st => {
            return (
                <option key={2-Math.random()+Math.random()}>{st}</option>
            );
        });

        if (this.state.cartArray < 1) {
            return (
                <div className="row">
                    <div className="col">
                        <h2>Cart Is Empty</h2>
                    </div>
                </div>
            )
        }
          

        return (
            <React.Fragment>
                <div className="row firstbox mt-4 mx-auto"  >
                    <div className="col-12 col-sm-5  py-3 mr-2  cart-first-box">
                         {cartBox}   
                    </div>
                    <div className="col-12 col-sm-6  py-3 mr-2 ml-sm-3 cart-first-box">
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Col sm={6} style={{marginTop:3}}>
                                        <Input type="text" name="name" id="name" placeholder="Name"/>  
                                    </Col>
                                    <Col sm={6} style={{marginTop:6}}>
                                        <Input type="text" name="last-name" id="lastname" placeholder="Last name"/>  
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col sm={10} style={{marginTop:6}}>
                                        <Input type="text" name="address" id="address" placeholder="Address line 1" />
                                    </Col>
                                    <Col sm={2} style={{marginTop:6}}>
                                        <Input type="text" name="unit" id="unit" placeholder="unit" />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col sm={9} style={{marginTop:6}}>
                                        <Input type="text" name="adress2" id="adress2" placeholder="Address line 2"/>
                                    </Col>
                                    <Col sm={3} style={{marginTop:6}}>
                                        <Input type="select" name="state" id="state">
                                            <option value="">State</option>
                                            {stateoptions}
                                        </Input>
                                    </Col>
                               </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col sm={4} style={{marginTop:6}}>
                                        <Input type="text" name="city" id="city" placeholder="City"/>
                                    </Col>
                                    <Col sm={3} style={{marginTop:6}}>
                                        <Input type="text" name="zip" id="zip" placeholder="zip"/>
                                    </Col>
                                    <Col sm={5} style={{marginTop:6}}>
                                        <Input type="text" name="phone" id="phone" placeholder="Phone number"/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <button type="submit" name="submit" id="submit-but"
                                            className="btn btn-primary btn-block">Submit</button>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </div>
                </div>

            </React.Fragment>
        )
    }  
}
 



class Cart extends Component {
    render() {
        return (
            <div className="container">
                <ShoppingArr cartArray={this.props.CartArrayS} />
            </div>
        )
    }
}

export default Cart;