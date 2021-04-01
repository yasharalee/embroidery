import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header.js'
import Footer from "./footer.js";
import Navbar from './navbar'
import FrontCategories  from "./frontCategories";
import Cart from './cart';
import DetailPage from './chosenitem';
import { addToCart } from '../redux/actionCreator';




const mapStateToProps = state => {
    return {
        Items: state.Items,
        CartArr: state.CartArr,
        variation: state.variation
    };
};

const mapDispatchToProps = {
   
    addToCart: (item) => ( addToCart(item))

};



class Main extends Component {
  

    render() { 

        const Cartpass = () => {
            console.log(this.props.CartArr.CartArr);
            
            return (
                <Cart
                    CartArrayS={this.props.CartArr.CartArr}
                
                />
               );
        };

        const HeaderC = () => {
            return (
                <Header itemsInCart={this.props.CartArr.CartArr.length} />
            );
        };
  
        const itemwithid = ({ match }) => {
            return (
                <DetailPage
                    item={this.props.Items.Items.filter(item => item.id === +match.params.itemId)[0]}
                    addToCart={this.props.addToCart}
                    variation={this.props.variation.variation.filter(itemV => itemV.mainItemId === +match.params.itemId)}
                    
                />
            );
        };
   
    
    
        return (
            <div>
                <HeaderC/>
                   <Navbar />
                    <Switch>
                        <Route exact path='/Cart' component={Cartpass} />
                        <Route exact path='/category' render={() => <FrontCategories items={this.props.Items.Items} />} />
                        <Route path='/category/:itemId' component={itemwithid} />
                        <Redirect to='/category'/>
                    </Switch>
                    <Footer />
            </div>
        );
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
