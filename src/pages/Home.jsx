import React from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import SortPopup from "../components/SortPopup";

const Home = ({ pizzas }) => {
	return (
		<div className="container">
			<div className="content__top">
				<Categories items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]} />
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
