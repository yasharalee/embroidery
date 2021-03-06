import React, { Component } from 'react'

class ShoppingArr extends Component {
 
    render() {
        
        const cartArray = this.props.arrayOfCart;

        if (cartArray.length >= 1 ) {
           
            const ArrToMap = cartArray.map(itemInCart => {
                return (
                    <img src={itemInCart.mainImage} key={itemInCart.index} width="250px" height="250px"/>
                )
            })
            return ( 
                <div className="col">
                    {ArrToMap}
                </div>
             );
         
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="text-primary">Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
        
     
    
}
 



class Cart extends Component {
    render() {
        return (
          
            <div className="container">
                <div className="row">
                    <ShoppingArr arrayOfCart={ this.props.CartArrayS}/>
                </div>
            </div>
        )
    }
}

export default Cart;