import React from 'react';
import PropType from 'prop-types';


export const CartItem = ({itemName, itemPrice, itemQuantity}) => {
    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">{itemName}</div>
                <div className="col-md-2">${itemPrice/100}</div>
                <div className="col-md-2">{itemQuantity}</div>
            </div>
        </div>
    );
}