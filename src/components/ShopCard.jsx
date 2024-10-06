import React from 'react';

function ShopCard({item}) {
	return (
		<div className="shop-card">
			<img src={item.image} alt={item.name} />
            <form id="details">
                <h3>{item.title}</h3>
                <label htmlFor="quantity">Quantity: </label>
                <div id="input">
                    <input type="number" id="quantity" name="quantity"></input>
                    <button type="button">+</button>
                    <button type="button">-</button>
                </div>
                <button type="submit">Add To Cart</button>
            </form>
		</div>
	);
}

export default ShopCard;
