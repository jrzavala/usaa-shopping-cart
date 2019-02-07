import React from 'react';
import {CartItem} from './CartItem'

export const CartItems = ({itemsList}) => {

    const calculateTotalPrice = () => {
        const totalPrice = itemsList.reduce((result, currentItem) => {
            return result+= (currentItem.product.priceInCents * currentItem.quantity)
        }, 0);
        return totalPrice/100;
    }

    return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">Product</div>
                    <div className="col-md-2">Price</div>
                    <div className="col-md-2">Quantity</div>
                </div>
                </div>
                {itemsList.map((item, index) => {
                    return <CartItem key={index} itemName={item.product.name} itemPrice={item.product.priceInCents} itemQuantity={item.quantity}/>
                })}
            </div>
            <div>Total Price: ${calculateTotalPrice()}</div>
        </div>
    );
}