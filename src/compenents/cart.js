import React, { Component } from 'react'

class ShoppingArr extends Component {
 
    render() { 
        const cartArr= this.props.cartArrayS
        const ArrToMap = cartArr.map(itemInCart => {
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
}
 



class Cart extends Component {
    render() {
        return (
          
            <div className="container">
                <div className="row">
                    <ShoppingArr cartArrayS={ this.props.cartArrayS}/>
                </div>
            </div>
        )
    }
}

export default Cart;