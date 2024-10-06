import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard.jsx';

const Shop = () => {
	const [shopData, setShopData] = useState([]);

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
	console.log(shopData);

	return (
		<div id="shop-cards">
			{shopData.map((item) => (
				<ShopCard
                    key={item.id}
                    item={item}
                />
			))}
		</div>
	);
};

export default Shop;
