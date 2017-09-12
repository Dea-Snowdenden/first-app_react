import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {qty:1};
    this.buy = this.buy.bind(this);
    this.show = this.show.bind(this);
  }
  buy() {
    this.setState({qty: this.state.qty + 1});
    this.props.handleTotal(this.props.price);
  }

show(){
  this.props.handleShow(this.props.name);
}
  render() {
    return (
      <div>
      <p>{this.props.name} = ${this.props.price} </p>
      <button onClick={this.buy}>Buy</button>
      <button onClick={this.show}>Show</button>
      <h3>{this.state.qty}</h3><hr/>
      </div>
    );
  }
 }
class Total extends Component {
  render() {
    return(
      <div>
        <h3> Total Balance: ${this.props.total}</h3>
      </div>
    )
  }
}

 class ProductList extends Component {
   constructor(props) {
     super(props);
     this.state={total:0}
     this.calcTotal = this.calcTotal.bind(this);
   }
   showProduct(name){
     alert("You are buying" + name);
   }

   calcTotal(price) {
     this.setState({total: this.state.total + price});
   }

   render(){
     return(
     <div>
     <Product name="Android" price={210} 
     handleShow={this.showProduct}
     handleTotal={this.calcTotal}/>
     <Product name="Apple" price={500} 
     handleShow={this.showProduct}
     handleTotal={this.calcTotal}/>
     <Product name="IOS" price={600} 
     handleShow={this.showProduct}
     handleTotal={this.calcTotal}/>
     <Product name="Samsung" price={250} 
     handleShow={this.showProduct}
     handleTotal={this.calcTotal}/>
     <Total total={this.state.total}/>
     </div>
     )
   }
 }

 export default ProductList;
