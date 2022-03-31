import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import PizzaIsLoading from "../components/PizzaBlock/PizzaIsLoading";
import SortPopup from "../components/SortPopup";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const Home = () => {
	const dispatch = useDispatch();

	const pizzas = useSelector(({ pizzas }) => pizzas.pizzas);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);

	React.useEffect(() => {
		dispatch(fetchPizzas(sortBy, category));
	}, [category, sortBy]);

	const onSelectCategory = (index) => {
		dispatch(setCategory(index));
	};

	const onSelectSortBy = (type) => {
		dispatch(setSortBy(type));
	};

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
				/>
				<SortPopup
					activeSortType={sortBy}
					onclickSortType={onSelectSortBy}
					items={[
						{ name: "популярности", type: "rating" },
						{ name: "цене", type: "price" },
						{ name: "алфавиту", type: "name" },
					]}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					? pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
					: Array(12)
							.fill(0)
							.map((_, index) => <PizzaIsLoading key={index} />)}
			</div>
		</div>
	);
};

export default Home;
