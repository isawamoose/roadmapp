import './Card.scss';

interface Props {
	title: string;
	price: string;
	discount: string;
	descriptionList: string[];
	large?: boolean;
}

export function Card(props: Props) {
	return (
		<div className={`category ${props.large ? 'large' : ''}`}>
			<h3>{props.title}</h3>
			<p>{props.price}</p>
			<p className="discount">{props.discount} for students</p>
			<ul>
				{props.descriptionList.map((description, index) => (
					<li key={index}>{description}</li>
				))}
			</ul>
		</div>
	);
}
