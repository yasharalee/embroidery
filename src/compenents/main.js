import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header.js'
import Footer from "./footer.js";
import Navbar from './navbar'
import FrontCategories  from "./frontCategories";
import Cart from './cart';
import DetailPage from './chosenitem';




const mapStateToProps = state => {
    return{ Items: state.Items };
};

const cartArray = [];

class Main extends Component {

  
    constructor(props) {
        super(props);

        this.cartdata = this.cartdata.bind(this);
    }

    cartdata =(item) => {
        cartArray.push(item);
        console.log(cartArray);
     
        
    }

    render() { 

        const Cartpass = () => {
            console.log(cartArray);
            return (
                     <Cart cartArrayS={cartArray} />
               );
        };

        const HeaderC = () => {
            return (
                <Header itemsInCart={cartArray.length} />
            );
        };
  
        const itemwithid = ({ match }) => {
            return (
                <DetailPage
                    item={this.props.Items.filter(item => +item.id === +match.params.itemId)[0]}
                    data={this.cartdata}
                    
                />
            );
        };
   
    
    
        return (
            <div>
                <HeaderC/>
                   <Navbar />
                    <Switch>
                        <Route exact path='/Cart' component={Cartpass} />
                        <Route exact path='/category' render={() => <FrontCategories items={this.props.Items} />} />
                        <Route path='/category/:itemId' component={itemwithid} />
                        <Redirect to='/category'/>
                    </Switch>
                    <Footer />
            </div>
        );
    }
}
 
export default withRouter(connect(mapStateToProps)(Main));
