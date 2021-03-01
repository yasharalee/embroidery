import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import 'C:/Users/yashar/Desktop/nucamp folder/3-React/embroidery/node_modules/bootstrap/dist/js/bootstrap';


class FrontCategories extends Component {

    
    
   
    render() {

       const filteredFlat = this.props.items.filter(hat1 => hat1.frontShape === "flatBill").map(flatbil => {
            return (
                <div key={flatbil.id} className="col-6 col-sm-4 col-md-3 ">
                    <Card className="card">
                        <Link to={`/category/${flatbil.id}`}>
                            <CardImg top className="cardsize" src={flatbil.mainImage} alt={flatbil.name} />
                            <CardBody>
                                <CardTitle>{flatbil.name}</CardTitle>
                            </CardBody>
                        </Link>
                    </Card>
                </div>
            )
         });
        
        


       const filteredslightly = this.props.items.filter(mhat2=> mhat2.frontShape === "slightly").map(slightly => {
        return(
         <div key={slightly.id} className="col-6 col-sm-4 col-md-3">
             <Card className="card">
                 <CardImg top  className="cardsize" src={slightly.mainImage} alt={slightly.name} />
                     <CardBody>
                         <CardTitle>{slightly.name}</CardTitle>
                     </CardBody>
            </Card>
         </div>
        )
    });

    const filteredCurved = this.props.items.filter(hat3=> hat3.frontShape === "curved").map(curved => {
        return(
         <div key={curved.id} className="col-6 col-sm-4 col-md-3">
             <Card className="card">
                 <CardImg top className="cardsize" src={curved.mainImage} alt={curved.name} />
                     <CardBody>
                         <CardTitle>{curved.name}</CardTitle>
                     </CardBody>
            </Card>
         </div>
        )
    });

    const filteredunstructured = this.props.items.filter(yhat4=> yhat4.frontShape === "unstructured").map(unstructure => {
        return(
         <div key={unstructure.id} className="col-6 col-sm-4 col-md-3">
             <Card className="card">
                 <CardImg top className="cardsize" src={unstructure.mainImage} alt={unstructure.name} />
                     <CardBody>
                         <CardTitle>{unstructure.name}</CardTitle>
                     </CardBody>
            </Card>
         </div>
        )
    });


        return (

            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item  active">
                    <a className="nav-link" data-toggle="tab" href="#flat">Flat Bill</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " data-toggle="tab" href="#slightly">Slightly-Curved</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#curved">Pre-Curved</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#unstruct">Unstructure</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="flat" className="container tab-pane fade  active"><br/>
                        <div className="row  mx-auto ">
                            {filteredFlat}
                        </div>
                    </div>
                    <div id="slightly" className="container tab-pane fade"><br/>
                        <div className="row  mx-auto">
                            {filteredslightly}
                        </div>
                    </div>
                    <div id="curved" className="container tab-pane fade"><br/>
                        <div className="row  mx-auto">
                            {filteredCurved}
                        </div>
                    </div>
                    <div id="unstruct" className="container tab-pane fade"><br/>
                        <div className="row  mx-auto">
                            {filteredunstructured}
                        </div>
                    </div>    
                </div>
        </div>
       )
}

    
}

export default FrontCategories;