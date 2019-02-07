import React from 'react';
import PropType from 'prop-types';

export class AddItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {value: '40', quantity: ''}
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    onAddItemClick = (event) => {
        event.preventDefault();
        //get the new item from list of products
        const newItem = this.props.products.filter((product) => {
            return product.id === parseInt(this.state.value)
        })[0];

        //format new item
        const itemToAdd = {product: {id: newItem.id, name: newItem.name, priceInCents: newItem.priceInCents}, quantity: parseInt(this.state.quantity)}
        this.props.addItem(itemToAdd);
    }

    handleQuantityChange = (event) => {
        const regex = new RegExp(/[^0-9]/, 'g');

        if(!regex.test(event.target.value)){
            this.setState({quantity: event.target.value})
        }
        
    }

    render(){

        return (
            <div className="container">
                    
                    <form onSubmit={this.onAddItemClick}>
    
                        <div className="form-group">
                            <div>Quantity</div>
                            <input className="form-control" type="text" pattern="[0-9]*" value={this.state.quantity} onChange={this.handleQuantityChange}/>

                        </div>

                        <div className="form-group">
                            <div>Products</div>
                            <select  className="form-control" value={this.state.value} onChange={this.handleChange}>
                                {
                                    this.props.products.map((product) => {
                                        return <option key={product.id} value={product.id}> {product.name}</option>
                                    })
                                }
                            </select>

                        </div>

                        <input className="btn btn-primary" type="submit" value="Submit"/>
                    </form>

                    
    
            </div>
        );


        //return ();

    } 
}