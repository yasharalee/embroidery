import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header.js'
import Footer from "./footer.js";
import Navbar from './navbar'
import FrontCategories  from "./frontCategories";
import Cart from './cart';
import DetailPage from './chosenitem';
import Custom from './custom.js';
import {
    addToCart, fetchItems,
    fetchvar, addtocustomize,
    removeFromCustomize,
    sendCustomImageToReducer, addManuallNumberOfItems,
    removeAllFromCustomize
} from '../redux/actionCreator';





const mapStateToProps = state => {
    return {
        Items: state.Items,
        CartArr: state.CartArr,
        variation: state.variation,
        customized: state.customized
    };
};

const mapDispatchToProps = {
    fetchvar: () => (fetchvar()),
    fetchItems: () => (fetchItems()),
    addToCart: (item) => (addToCart(item)),
    addtocustomize: (item) => (addtocustomize(item)),
    removeFromCustomize: (item) => (removeFromCustomize(item)),
    sendCustomImageToReducer,
    addManuallNumberOfItems,
    removeAllFromCustomize,

};



class Main extends Component {

    componentDidMount() {
        this.props.fetchItems();
        this.props.fetchvar();
    }
  

    render() { 

        const Cartpass = () => {
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
                    errMass={this.props.variation.errMass}
                    isLoading={this.props.variation.isLoading}
                    addtocustomize={this.props.addtocustomize}  
                />
            );
        };

   
        const FrontCat = () => {
            return (
                <FrontCategories
                    items={this.props.Items.Items}
                    errMass={this.props.Items.errMass}
                    isLoading={this.props.Items.isLoading}
                />
            );
        };

        const CustomPage = () => {
            return (
                <Custom
                    customized={this.props.customized.customized}
                    addToCart={this.props.addToCart}
                    addtocustomize={this.props.addtocustomize}
                    removeFromCustomize={this.props.removeFromCustomize}
                    myFile={this.props.customized.myFile}
                    sendCustomImageToReducer={this.props.sendCustomImageToReducer}
                    addManuallNumberOfItems={this.props.addManuallNumberOfItems}
                    removeAllFromCustomize={this.props.removeAllFromCustomize}
                />
            )
        };
    
    
        return (
            <div>
                <HeaderC/>
                   <Navbar />
                    <Switch>
                        <Route exact path='/Cart' component={Cartpass} />
                        <Route exact path='/category' component={FrontCat} />
                    <Route path='/category/:itemId' component={itemwithid} />
                    <Route path='/customize' component={ CustomPage }/>
                        <Redirect to='/category'/>
                    </Switch>
                    <Footer />
            </div>
        );
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
