import './Pricing.scss';

export function Pricing() {
	return (
		<>
			<div className="categories">
				<div className="category session">
					<h3>Individual Consulting Session</h3>
					<p>$100/hr</p>
					<p className="discount">$75/hr for students</p>
				</div>
				<div className="category package">
					<h3>The Journey Package</h3>
					<p>$2500</p>
					<p className="discount">$2000 for students</p>
				</div>
				<div className="category subscription">
					<h3>Monthly Subscription</h3>
					<p>$500/mo</p>
					<p className="discount">$400/mo for students</p>
				</div>
			</div>
		</>
	);
}
