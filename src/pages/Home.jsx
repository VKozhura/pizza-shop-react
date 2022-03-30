import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import SortPopup from "../components/SortPopup";

import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const Home = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchPizzas());
	}, []);

	const pizzas = useSelector(({ pizzas }) => pizzas.pizzas);

	const onSelectCategory = (index) => {
		dispatch(setCategory(index));
	};

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					onClickItem={onSelectCategory}
					items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
				/>
				<SortPopup
					items={[
						{ name: "популярности", type: "popular" },
						{ name: "цене", type: "price" },
						{ name: "алфавиту", type: "alphabet" },
					]}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{pizzas && pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
			</div>
		</div>
	);
};

export default Home;
