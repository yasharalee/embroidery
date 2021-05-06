import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Custom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myFile: "/imgs/Image-Placeholder.jpg",
            customized: this.props.customized,
            numbers:{}
        };
        this.filechange = this.filechange.bind(this);
    };

    componentDidMount() {
        this.numberOfItemsInArr();
    };

    numberOfItemsInArr = () => {

        const uniqarra2 = [...new Set(this.state.customized)];
       
        uniqarra2.map(ea => {
            let propertyName = ea.id;
            this.state[propertyName] =[];
        })

        uniqarra2.map(first => {
                this.state.customized.map(sec => {
                    if (sec === first) {
                        this.setState({
                            [first.id]: this.state[first.id].push(sec)
                        });
                    };
                });
            });
        };



    filechange(event) {
        this.setState({
            myFile: URL.createObjectURL(event.target.files[0])
        })
    };



    
    render() {
        const uniqarra = [...new Set(this.state.customized)];
        




        const showItems = uniqarra.map(eachitem => {
            let length = this.state[eachitem.id]
            return (
                    <div className="row align-items-center" key={Math.random() + Math.random()*Math.random()}>
                        <div className="col-4" style={{marginTop:20}}>
                            <Link to={`/category/${eachitem.mainItemId}`}>
                                <img src={eachitem.mainImage} alt={eachitem.name} width="100" height="100" />
                            </Link>
                        </div>
                        <div className="col-1">
                            <h3>{ length }</h3>
                        </div>
                    </div>
                );
            });
            
        


        return (
            <div className="containet-fluid px-20">
                <div className="row">
                    <div className="col-sm-5" style={{marginTop:20}}>
                        <img src={this.state.myFile} alt="preview" className="img-fluid" />
                        <div style={{marginTop:20}}>
                            <input type="file" onChange={this.filechange} />
                        </div>
                    </div>
                    <div className="col-sm-7"  >
                        {showItems}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Custom;