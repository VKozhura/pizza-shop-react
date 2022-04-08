const initialState = {
	pizzas: {},
	totalPrice: 0,
	totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PIZZA_TO_CART":
			const currentPizzas = !state.pizzas[action.payload.id]
				? [action.payload]
				: [...state.pizzas[action.payload.id].items, action.payload];
			const newPizzas = {
				...state.pizzas,
				[action.payload.id]: {
					items: currentPizzas,
					totalPrice: getTotalPrice(currentPizzas),
				},
			};
			const items = Object.values(newPizzas).map((pizza) => pizza.items);
			const allPizzas = [].concat.apply([], items);
			const totalPrice = getTotalPrice(allPizzas);
			return {
				...state,
				pizzas: newPizzas,
				totalCount: allPizzas.length,
				totalPrice,
			};
		case "REMOVE_CART_ITEM":
			const newPizzasCart = {
				...state.pizzas,
			};
			const currentTotalPrice = newPizzasCart[action.payload].totalPrice;
			const currentTotalCount = newPizzasCart[action.payload].items.length;

			delete newPizzasCart[action.payload];
			return {
				...state,
				pizzas: newPizzasCart,
				totalPrice: state.totalPrice - currentTotalPrice,
				totalCount: state.totalCount - currentTotalCount,
			};

		case "CLEAR_CART":
			return {
				pizzas: {},
				totalPrice: 0,
				totalCount: 0,
			};
		default:
			return state;
	}
};

export default cart;
