import React, { Component } from 'react';





function Renderitem({item}) {
    console.log(item);
    return (

                <React.Fragment >
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
                </React.Fragment>
    );
}


function RenderDescription({item}) {
    return (
        <React.Fragment>
            <h2 className="fin-sell-head">{item.name}</h2>
            <ul className="list-unstyled">
                <li><h3>material is:  {item.material}</h3></li>
                <li>{item.bulletone}</li>
                <li>{item.bullettwo}</li>
                <li>{item.bulletthree }</li>
                <li>Made in :  { item.madein}</li>
                <li>{ item.desc}</li>
            </ul>
        </React.Fragment>
    );
}


const arrToSend = [];

class Shoppingbox extends Component {

    constructor(props) {
        super(props);
       
    }

    
 
    render() {
        const item = this.props.item;
    return (
        <React.Fragment>
                   
                        <div className=" mt-3 text-danger">
                            <h1> $ {item.price}</h1>
                            <hr/>
                       </div>
                   
                    <div className="form-group mt-4">
                        <select className="form-control" id="capSize" name="capSize">
                            <option className="disabled">Cap Size</option>
                            <option value="small">small</option>
                            <option value="S/M">Small/Medium</option>
                            <option value="M/L">Medium/Large</option>
                            <option value="L/XL">Large/X-Large</option>
                            <option value="XXL">XX-Large</option>
                        </select>
                    </div>
            <div className="input-group mt-4 mb-2">
                
                    <span className="input-group-btn  input-group-append">
                        <button type="button" className="btn btn-info btn-number"  data-type="minus" data-field="quant[1]">
                        <i className="minus icon"></i>
                    </button>
               
                      
                        
                        </span>
                <input type="text" name="quant[1]" className="form-control input-number"  min="1" max={item.quantuty
                } />
                        <span className="input-group-btn input-group-append">
                      <button type="button" className="btn btn-info btn-number" data-type="plus" data-field="quant[1]">
                        <i className="plus icon "></i>
                        </button>
                       
                        </span>
                    </div>
                    <button type="submit" onClick={()=>this.props.data(item)} className="btn btn-primary btn-block" name="addtocart">Add to cart</button>
                    <button type="button" className="btn btn-primary btn-block" name="customize">Customize</button>

        </React.Fragment>
     )
    }

}




function DetailPage(props) {

    return (
        <div className="container mb-5 px-5">
             <div className="row d-flex">
                <div className="col-12 col-sm-4">
                    <Renderitem item={props.item} />
                </div>
                <div className="col-12 col-sm-6 mt-4">
                    <RenderDescription item={props.item} />
                </div>
                <div className="col-10 col-sm-2 mx-auto mt-sm-4 shopback" >
                    <Shoppingbox  item={props.item} data={props.data} />
                </div>
            </div>
        </div>
           )

}

 


export default DetailPage;