import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<Link to="/home">CLICK ME!!!!!</Link>
            <Link to="/shop">CLICK ME TO SHOP!!!!!</Link>
		</div>
	);
};

export default Navbar;
