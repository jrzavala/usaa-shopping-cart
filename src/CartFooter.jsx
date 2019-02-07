import React from 'react';
import PropType from 'prop-types';

export const CartFooter = ({copyright}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {copyright}</a>
        </nav>
    );
}

CartFooter.propTypes = {
    copyright: PropType.string
};