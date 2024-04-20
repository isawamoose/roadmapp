import './Pricing.scss';

export function Pricing() {
	return (
		<>
			<div className="categories">
				<div className="category">
					<h3>Single Session</h3>
					<p>$100/hr</p>
					<p className="discount">$75/hr for students</p>
					<ul>
						<li>
							One on one consultation on architecture and web
							technologies
						</li>
					</ul>
				</div>
				<div className="category large">
					<h3>Journey Together Package</h3>
					<p>$2500</p>
					<p className="discount">$2000 for students</p>
					<ul>
						<li>Initial consultation</li>
						<li>Custom architecture design</li>
						<li>
							Technology training materials access for 3 months
						</li>
						<li>Weekly check-in sessions for 3 months</li>
						<li>Unlimited messaging correspondence</li>
					</ul>
				</div>
				<div className="category">
					<h3>Monthly Subscription</h3>
					<p>$500/mo</p>
					<p className="discount">$400/mo for students</p>
					<ul>
						<li>Weekly check-in sessions</li>
						<li>Unlimited messaging correspondence</li>
					</ul>
				</div>
			</div>
		</>
	);
}
