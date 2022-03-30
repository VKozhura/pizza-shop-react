import React from "react";

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

const Categories = ({ items, onClickItem }) => {
	const [activeItem, setActiveItem] = React.useState(null);

	const onSelectItem = (index) => {
		setActiveItem(index);
		onClickItem(index);
	};

	return (
		<div className="categories">
			<ul>
				<li
					className={activeItem === null ? "active" : undefined}
					onClick={() => onSelectItem(null)}
				>
					Все
				</li>
				{items &&
					items.map((name, index) => (
						<li
							className={activeItem === index ? "active" : undefined}
							onClick={() => onSelectItem(index)}
							key={`${name}_${index}`}
						>
							{name}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Categories;
