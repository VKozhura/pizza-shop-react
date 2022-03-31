import React from "react";
import ContentLoader from "react-content-loader";

const PizzaIsLoading = () => {
	return (
		<ContentLoader
			className="pizza-block"
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="132" cy="142" r="115" />
			<rect x="3" y="267" rx="6" ry="6" width="271" height="26" />
			<rect x="0" y="309" rx="6" ry="6" width="280" height="84" />
			<rect x="0" y="419" rx="6" ry="6" width="86" height="28" />
			<rect x="137" y="408" rx="21" ry="21" width="140" height="46" />
		</ContentLoader>
	);
};

export default PizzaIsLoading;
