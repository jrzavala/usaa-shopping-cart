import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CartHeader} from './CartHeader';
import {CartFooter} from './CartFooter';
import {CartItems} from './CartItems';
import {AddItem} from './AddItem';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  
    }
  }


  addItem = (newItem) => {

      let isAlreadyInCart = false;
      const newList = this.state.cartItemsList.map((item) => {
          if(item.product.id === newItem.product.id){ //item already in the cart
            isAlreadyInCart = true;
            return newItem;
          } 
          else{
            return item;
          }
      });

      isAlreadyInCart ?  this.setState({cartItemsList: newList}) : this.setState({cartItemsList: [...this.state.cartItemsList, newItem]});
      
      
  }

  render() {

    return (
      <div>
          <CartHeader/>
          <CartItems itemsList={this.state.cartItemsList}/>
          <AddItem products={this.state.products} addItem={this.addItem}/>
          <CartFooter copyright="2016"/>
      </div>
      
    );
  }
}

export default App;
