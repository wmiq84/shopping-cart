import { useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { Outlet } from 'react-router-dom';

function App() {
	const [quantity, setQuantity] = useState(0);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(quantity);
	};

	const decrementQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity - 1);
	};

	const incrementQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const contextValue = {
    quantity,
		decrementQuantity,
		incrementQuantity,
		handleSubmit,
	};

	return (
		<div>
			<Navbar quantity={quantity} />
			<Outlet context={contextValue} />
		</div>
	);
}

export default App;
