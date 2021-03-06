import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;

// class App extends React.Component {
// 	componentDidMount() {
// 		axios
// 			.get("http://localhost:3000/db.json")
// 			.then((response) => this.props.setPizzas(response.data.pizzas));
// 	}
// 	render() {
// 		return (
// 			<div className="wrapper">
// 				<Header />
// 				<div className="content">
// 					<Routes>
// 						<Route path="/" element={<Home pizzas={this.props.pizzas} />} />
// 						<Route path="/cart" element={<Cart />} />
// 					</Routes>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => ({
// 	pizzas: state.pizzas.pizzas,
// });

// const mapDispatchToProps = {
// 	setPizzas,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
