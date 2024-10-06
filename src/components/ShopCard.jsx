import React from 'react';

function ShopCard({item, handleSubmit, decrementQuality, incrementQuantity}) {
	return (
		<div className="shop-card">
			<img src={item.image} alt={item.name} />
            <form id="details">
                <h3>{item.title}</h3>
                <label htmlFor="quantity">Quantity: </label>
                <div id="input">
                    <input type="number" id="quantity" name="quantity"></input>
                    <button type="button" onClick={decrementQuality}>-</button>
                    <button type="button" onClick={incrementQuantity}>+</button>
                </div>
                <button type="submit" onClick={handleSubmit}>Add To Cart</button>
            </form>
		</div>
	);
}

export default ShopCard;
