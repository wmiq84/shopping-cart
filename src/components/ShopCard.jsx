import React from 'react';

function ShopCard({item}) {
	return (
		<div>
			<img src={item.image} alt={item.name} />
		</div>
	);
}

export default ShopCard;
