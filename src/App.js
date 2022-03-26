import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
	const [pizzas, setPizzas] = React.useState([]);

	useEffect(() => {
		axios.get("http://localhost:3000/db.json").then((response) => setPizzas(response.data.pizzas));
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home pizzas={pizzas} />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
