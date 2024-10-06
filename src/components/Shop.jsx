import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard.jsx';
import { useOutletContext } from 'react-router-dom';

const Shop = () => {
	const [shopData, setShopData] = useState([]);
    const { incrementQuantity, decrementQuantity, handleSubmit } = useOutletContext();

	useEffect(() => {
		const fetchShopData = async () => {
			const fetchedData = [];
			for (let i = 1; i <= 12; i++) {
				const response = await fetch(`https://fakestoreapi.com/products/${i}`);
				const data = await response.json();
				fetchedData.push(data);
			}
			setShopData(fetchedData);
		};

		fetchShopData();
	}, []);

	return (
		<div id="shop-cards">
			{shopData.map((item) => (
				<ShopCard
					key={item.id}
					item={item}
                    decrementQuantity={decrementQuantity}
					incrementQuantity={incrementQuantity}
					handleSubmit={handleSubmit}
				/>
			))}
		</div>
	);
};

export default Shop;
