import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({quantity}) => {
	return (
		<div>
			<Link to="/home">CLICK ME!!!!!</Link>
            <Link to="/shop">CLICK ME TO SHOP!!!!!</Link>
            <h1>{quantity}</h1>
		</div>
	);
};

export default Navbar;
