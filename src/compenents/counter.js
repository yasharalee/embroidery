import React, { Component } from 'react';
import { Icon } from "semantic-ui-react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
            backNumber:0,
            eachItemToCounter: this.props.eachItemToCounter,
            minusDeleteIcon:"minus square outline "
        };
    };
    


    onNumberChange = (event) => {
        const value = event.target.value;

        if (value === null || value === undefined || !value) {
            this.setState({
                number: 0
            });

        }  else
            if (!isNaN(value)) {
            
            this.setState({
                number: value
            });
            const tempManuallArr = [];
                if (value > 0) {
                    for (let i = 0; i < value; i++) {
                tempManuallArr.push(this.state.eachItemToCounter);
                
                    }
                    this.props.addManuallNumberOfItems(tempManuallArr);
                } else {
                    this.props.removeAllFromCustomize(this.state.eachItemToCounter);
                }
        };
        event.preventDefault();
    };




    plusOperator = () => {
        let i = this.state.number;
        this.setState({
            number: ++i
        });
        if (this.props.addtocustomize) {
            this.props.addtocustomize(this.state.eachItemToCounter);
        } else if (this.props.addToCart) {
            this.props.addToCart(this.state.eachItemToCounter);
        }
    };




    minusOperator = () => {
        let number = this.state.number;
        
        if (number === null || number === undefined || number < 1) {
            this.setState({
                number: 0
            });
        }else if(number < 2) {
            this.setState({
                minusDeleteIcon:"delete"
            });
        };


         
        let i = this.state.number;

            this.setState({
                number: --i
            });
            if (this.props.removeFromCustomize) {
                this.props.removeFromCustomize(this.state.eachItemToCounter);
            } else if (this.props.removeFromCart) {
                this.props.removeFromCart(this.state.removeFromCart);
            };
        };
    


    render() { 
        return (
            <div className="align-items-center">
                <span><Icon name={this.state.minusDeleteIcon} fitted size="big" onClick={this.minusOperator} /></span>
                <input
                    type="text"
                    name="counterBox"
                    required
                    size="3"
                    value={this.state.number}
                    onChange={(event) => this.onNumberChange(event)}
                />
                <span><Icon name="plus square outline "  fitted size="big" onClick={this.plusOperator} /></span>
            </div>
         );
    }
}
 
export default Counter;