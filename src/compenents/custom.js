import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Counter from "./counter";
import Seccounter from './Seccounter';

class Custom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customized: this.props.customized,
            numberfromCounter: null,
            itemFromCounter: null
        };
    };

    

    imageUrlCreat=(event) => {
        this.props.sendCustomImageToReducer(URL.createObjectURL(event.target.files[0]));
    };



    NumberAndItemFromCounter = (numFromCounter, itemThatApplliesTo) => {
        const compareArrLength = this.state.customized.filter(
            Item1 => Item1.id === itemThatApplliesTo
        ).length;
        const recievedItemFromcounter = this.state.customized.filter(
            Item => Item.id === itemThatApplliesTo
        )[0];

        if (numFromCounter>compareArrLength) {
            const sum = numFromCounter - compareArrLength;
            for (let i = 0; i < sum; i++) {
                this.props.addtocustomize(recievedItemFromcounter)
            };
        } else
            if (numFromCounter<compareArrLength) {
                const sub = compareArrLength - numFromCounter;
                for (let b = 0; b < sub; b++) {
                    this.props.removeFromCustomize(recievedItemFromcounter);
                };
            };
    };



      
    
    render() {
        const uniqarra = [...new Set(this.state.customized)];
        uniqarra.sort((a, b) => {
            return a.id - b.id
        });

        const showItems = uniqarra.map(eachitem => {
            let filteredItemsInArr = this.state.customized.filter(one => one.id === eachitem.id);
            
            return (
                <div className="row align-items-center" key={Math.random() + Math.random()*Math.random()}>
                    <div className="col-2" style={{marginTop:20}}>
                        <Link to={`/category/${eachitem.mainItemId}`}>
                            <img src={eachitem.mainImage} alt={eachitem.name} width="100" height="100" />
                        </Link>
                    </div>
                  
                    <div className="col-3">
                        <Seccounter
                            numberFromComponent={filteredItemsInArr.length}
                            itemThatApplliesTo={eachitem.id}
                            NumberAndItemFromCounter={this.NumberAndItemFromCounter}
                        />
                    </div>
                    <div className="col-sm-2">
                        <h3>{filteredItemsInArr.length}</h3>
                    </div>
                </div>
                );
            });
          

        return (
            <div className="containet-fluid px-20">
                <div className="row">
                    <div className="col-sm-5" style={{marginTop:20}}>
                        <img src={this.props.myFile} alt="preview" className="img-fluid" />
                        <div style={{marginTop:20}}>
                            <input type="file" onChange={this.imageUrlCreat} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:20}}>
                    <div className="col-sm-7"  >
                        {showItems}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Custom;


  // numberOfItemsInArr = () => {

    //     const uniqarra2 = [...new Set(this.state.customized)];
       
    //     uniqarra2.map(ea => {
    //         let propertyName = ea.id;
    //         this.state[propertyName] =[];
    //     })

    //     uniqarra2.map(first => {
    //             this.state.customized.map(sec => {
    //                 if (sec === first) {
    //                     this.setState({
    //                         [first.id]: this.state[first.id].push(sec)
    //                     });
    //                 };
    //             });
    //         console.log(this.state[first.id]);
    //         });
    // };



    

    // getTheNumberFromCounter = (numFromCounter, itemThatApplliesTo) => {
    //     const itemByObject = this.state.customized.filter(items => items.id === itemThatApplliesTo)[0];
    //     const itemByArrayLength = this.state.customized.filter(items => items.id === itemThatApplliesTo).length;

        
    //         console.log(this.state);
    //         const copArr = []
    //         for (let p = 0; p < numFromCounter; p++) {
    //             copArr.push(itemByObject); 
    //         };
    //         console.log(copArr);
    //         this.addRemove(itemByObject, copArr)
         

    // };
    
    // addRemove = async (itemByObject, copArr) => {
    //     await this.props.removeAllFromCustomize(itemByObject);
    //     await this.props.addManuallNumberOfItems(copArr);
    // }


    //   {/* <div className="col-3">
    //                     <Counter
    //                         number={filteredItemsInArr.length}
    //                         eachItemToCounter={eachitem}
    //                         addtocustomize={this.props.addtocustomize}
    //                         removeFromCustomize={this.props.removeFromCustomize}
    //                         addManuallNumberOfItems={this.props.addManuallNumberOfItems}
    //                         removeAllFromCustomize={this.props.removeAllFromCustomize}
    //                     />
    //                 </div> */}