import React, { Component } from 'react';
import { Icon } from "semantic-ui-react";

class Seccounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.numberFromComponent,
            itemThatApplliesTo: this.props.itemThatApplliesTo
        };
    };

    
   
    onNumberChange = (event ) => {
        const value = event.target.value;
        
            if (!isNaN(value)) {
            
            this.setState({
                number: value
            });
        };
    
    };

    sendData = () => {
        this.props.NumberAndItemFromCounter(this.state.number, this.state.itemThatApplliesTo);
       
    };


    plusOperator = () => {
        this.setState({
            number: ++this.state.number
        });
        
        const sendplus = this.props.NumberAndItemFromCounter(this.state.number, this.state.itemThatApplliesTo)
        setTimeout(sendplus, 200);
    };




    minusOperator = () => {
        
        
        if (this.state.number< 1 ) {
            this.setState({
                number: 0
            });
        } else {
            this.setState({
                number: --this.state.number
            });
            
        };
        const sendminus = this.props.NumberAndItemFromCounter(this.state.number, this.state.itemThatApplliesTo)
        setTimeout(sendminus, 100);
    };
    


    render() {
        if (this.state.number === 0) {
            return (<React.Fragment />)
        }
        return (
            <div className="align-items-center">
                <span>
                    <Icon name="minus square outline " fitted size="big"
                        onClick={ this.minusOperator}
                />
                </span>


                <input
                    type="text"
                    name="counterBox"
                    required
                    size="3"
                    value={this.state.number}
                    onChange={(event) => this.onNumberChange(event)}
                    onBlur = {this.sendData}
                />
                <span>


                    <Icon name="plus square outline "
                        fitted size="big"
                        onClick={this.plusOperator}
                />
                </span>
            </div>
         );
    }
}
 
export default Seccounter;