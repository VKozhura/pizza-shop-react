import axios from "axios";

// асинхронный action - функция возвращает функцию
export const fetchPizzas = () => (dispatch) => {
	axios.get("http://localhost:3001/pizzas").then((response) => {
		dispatch(setPizzas(response.data));
	});
};

export const setPizzas = (pizzas) => ({
	type: "SET_PIZZAS",
	payload: pizzas,
});
