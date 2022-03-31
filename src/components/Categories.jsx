import React from "react";
import PropTypes from "prop-types";

// class Categories extends React.Component {
// 	state = {
// 		activeItem: 3,
// 	};

// 	onSelectItem = (index) => {
// 		this.setState({
// 			activeItem: index,
// 		});
// 	};

// 	render() {
// 		const { items } = this.props;
// 		return (
// 			<div className="categories">
// 				<ul>
// 					<li>Все</li>
// 					{items.map((name, index) => (
// 						<li
// 							className={this.state.activeItem === index ? "active" : ""}
// 							onClick={() => this.onSelectItem(index)}
// 							key={`${name}_${index}`}
// 						>
// 							{name}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		);
// 	}
// }

const Categories = ({ activeCategory, items, onClickCategory }) => {
	return (
		<div className="categories">
			<ul>
				<li
					className={activeCategory === null ? "active" : undefined}
					onClick={() => onClickCategory(null)}
				>
					Все
				</li>
				{items &&
					items.map((name, index) => (
						<li
							className={activeCategory === index ? "active" : undefined}
							onClick={() => onClickCategory(index)}
							key={`${name}_${index}`}
						>
							{name}
						</li>
					))}
			</ul>
		</div>
	);
};

Categories.propTypes = {
	// activeCategory: PropTypes.oneOf([PropTypes.number, null]),
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func.isRequired,
};

export default Categories;
