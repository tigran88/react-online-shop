import React from 'react';

import NavMenuItem from '../NavMenuItem/NavMenuItem';

const navbar = () => {
    return (
        <nav className="flex h-16 bg-indigo-darker text-grey-lightest mb-5">
            <div className="container mx-auto flex justify-between items-center">
                <div>Logo</div>
                <ul className="flex list-reset">
                    <NavMenuItem to="/">Home</NavMenuItem>
                    <NavMenuItem to="/products">Products</NavMenuItem>
                    <NavMenuItem to="/cart">Cart</NavMenuItem>
                </ul>
            </div>
        </nav>
    )
};

export default navbar;