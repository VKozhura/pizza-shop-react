import axios from "axios";

// асинхронный action - функция возвращает функцию
export const fetchPizzas = (sortBy, category) => (dispatch) => {
	dispatch(setLoaded(false));
	axios
		.get(`/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${sortBy}&_order=desc`)
		.then((response) => {
			dispatch(setPizzas(response.data));
		});
};

export const setPizzas = (pizzas) => ({
	type: "SET_PIZZAS",
	payload: pizzas,
});

export const setLoaded = (isLoaded) => ({
	type: "SET_LOADED",
	payload: isLoaded,
});
