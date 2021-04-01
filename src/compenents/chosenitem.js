


import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';


const sortedSize = [
    "S", "Small","S/M",
    "M", "Medium","M/L",
    "L", "Large","L/XL",
    "XL", "X-Large","XL/XX-L",
    "XX-L", "XX-Large",
]

class RenderItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            capSize: "",
            quantity: "",
            colorbutton:"",
            sizeOpthions: [],
            item: this.props.item,
            variation: this.props.variation,
            varColor:"",
            goback: "d-none",
            sizeClass: "none",
            quantitybox: "none",
            priceArray:[]

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTheState = this.updateTheState.bind(this);
        this.goback = this.goback.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.onSelectSize = this.onSelectSize.bind(this);
    }

    
   

    handleSubmit(event) {
        
        for (let i = 0; i < this.quantity.value; i++) {
            this.props.addToCart(this.state.item);
            
        }
        
    }

    goback() {
        this.setState({
            goback: "d-none",
             variation: this.props.variation,
             varColor: "",
             item: this.props.item,
            capSize: "",
            quantity:"",
            sizeClass: "none",
            quantitybox:"none",
        })
        
        
    }

    changeColor(event) {
        console.log(event.target.value);
         const value =event.target.value;
         this.setState({
             colorbutton: value
         });
         const choosencolor = this.state.variation.filter(filcolor => filcolor.color === value)[0];
        const choosencolor2 = this.state.variation.filter(filcolor => filcolor.color === value);
        console.log(choosencolor);
        this.setState({
                 varColor:value,
                 item: choosencolor,
                 variation: choosencolor2,
                 goback: "d-block",
                 sizeClass:"block",
             })
    }



    updateTheState (event){
        const value = event.target.value;
        
        this.setState({
            quantity: value,
           
        });
    }
    
    onSelectSize(event) {
     
  
        if (this.state.varColor && event.target.value) {
            this.setState({
                capSize: event.target.value,
                quantitybox:"block",
            });

            
            
                const colorSizefilter = this.state.variation.filter(
                    colSize => colSize.size === event.target.value && colSize.color === this.state.varColor
                )[0];
              
            this.setState({
                item: colorSizefilter,
            })
           
        } else if (!event.target.value) {
            this.setState({
                quantitybox: "none",
                quantity:"",
            })
        }
        console.log(this.state.capSize);
    }

    render() {
        const item = this.state.item;
        const colorArr = [];
        const colorMap = this.state.variation.map(
            each=> {colorArr.push(each.color)}
        )
        const uniqColor = [...new Set(colorArr)];
       
        const MakeColors = uniqColor.map(colorsItem => {
            return (
                <div className="col-2 col-sm-3 align-items-center" key={(colorsItem.length)-Math.random()+Math.random()}>
                    <button className="color-item" name="colorbutton" value={colorsItem}
                        onClick={this.changeColor} style={{ background: colorsItem }}></button>
                </div>
            )
        })
        const sorted = [];
        const sizaArr = [];
        const sizeMap = this.state.variation.map(
            eachsize => { sizaArr.push(eachsize.size) }
        );
        const uniqSize = [...new Set(sizaArr)];

         uniqSize.map(
            i => sorted.splice(sortedSize.indexOf(i), 0, i)
        );

        const SizingOptions = uniqSize.map(varitem => {
            return (
                <option key={Math.random()+Math.random()+Math.random()} value={varitem} >{varitem}</option>
            )
            
        });
        

        const pam = [];
        const priceArr = this.state.variation.map(price => price.price);
        priceArr.sort(function (a, b) { return a - b });

        console.log(priceArr);
        
            if (priceArr[0] === priceArr[priceArr.length-1]) {
                
                pam.push(priceArr[priceArr.length-1]);
                
            } else if (priceArr[0] < priceArr[priceArr.length-1]) {
               
                pam.push(`${priceArr[0]} - ${priceArr[priceArr.length-1]}`);
                
        }
        console.log(pam);
       
        
        
        return (
            <React.Fragment >
                    <div className="row d-flex">
                        <div className="col-12 col-sm-4">
                            <img src={item.mainImage} alt={item.name} width="450px" height="350px" className="d-flex img-fluid img-thumbnail mt-4" />
                            <div className="row d-flex">
                                <div className="col">
                                    <img src={item.mainImage} alt={item.name} width="75px" height="75px" className="d-flex img-fluid img-thumbnail mt-4" />
                                </div>
                                <div className="col">
                                    <img src={item.mainImage} alt={item.name} width="75px" height="75px" className="d-flex img-fluid img-thumbnail mt-4" />
                                </div>
                                <div className="col">
                                    <img src={item.mainImage} alt={item.name} width="75px" height="75px" className="d-flex img-fluid img-thumbnail mt-4" />
                                </div>
                                <div className="col">
                                    <img src={item.mainImage} alt={item.name} width="75px" height="75px" className="d-flex img-fluid img-thumbnail mt-4" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 mt-4">
                            <h2 className="fin-sell-head">{item.name}</h2>
                            <ul className="list-unstyled">
                                <li><h2 className="text-danger">Price: { pam }</h2></li>
                                <li><h3>material is:  {item.material}</h3></li>
                                <li>{item.bulletone}</li>
                                <li>{item.bullettwo}</li>
                                <li>{item.bulletthree }</li>
                                <li>Made in :  { item.madein}</li>
                                <li>{ item.desc}</li>
                            </ul>
                        </div>
                        <div className="col-10 col-sm-2 mx-auto mt-sm-4 shopback" >
                            <div className=" mt-3 text-danger">
                            <h1> $ {item.price}</h1>
                                    <hr/>
                        </div>
                        <div>
                            <div className="row ">
                                {MakeColors}    
                            </div>
                            <div>
                                <a role="button" className={this.state.goback} onClick={this.goback}> ... Go Back</a>
                            </div>
                        </div>
             <Form id="formid" onSubmit={values=> this.handleSubmit(values)}>     
                    <FormGroup>
                                <Input type="select"
                                    style={{ display: this.state.sizeClass }}
                                    value={this.state.capSize}
                                    required
                                    onChange={this.onSelectSize} 
                                    id="capSize" name="capSize"
                                    innerRef={input => this.capSize = input} >
                                    
                                    <option value="" >Size</option>

                                    {SizingOptions}
                                        
                            </Input>
                    </FormGroup>

                    <FormGroup>
                                <Input type="number" style={{ display: this.state.quantitybox }}
                                    required
                                    placeholder="0"
                                    value={this.state.quantity}
                                    onChange={event=>this.updateTheState(event)}
                                    min="0" max={item.quantity}
                                    id="quantity"
                                    name="quantity"
                                    innerRef={input => this.quantity = input}
                                />
                    </FormGroup>
                    <FormGroup>
                    
                            <button type="submit"  className="btn btn-primary btn-block" name="addtocart">Add to cart</button>
                             <button type="button" className="btn btn-primary btn-block" name="customize">Customize</button>
          
                    </FormGroup>    
            </Form>
                        </div>
                    </div>
                </React.Fragment>
        )
    }
}



// ===========================




function DetailPage({ item, variation, addToCart }) {
    console.log(variation);

    return (
        <div className="container mb-5 px-5">
                    <RenderItem item={item} variation={variation}  addToCart={addToCart}  />
        </div>
     
           )

}

 


export default DetailPage;