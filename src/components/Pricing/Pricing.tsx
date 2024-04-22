import { Card } from './Card';
import './Pricing.scss';

export function Pricing() {
	return (
		<>
			<div className="categories">
				<Card
					title="Single Session"
					price="$100/hr"
					discount="$75/hr for students"
					descriptionList={[
						'One on one consultation on architecture and web technologies',
					]}
				/>

				<Card
					large={true}
					title="Journey Package"
					price="$2000"
					discount="$1500 for students"
					descriptionList={[
						'Initial consultation',
						'Custom architecture design',
						'Technology training access for 3 months',
						'Weekly check-in sessions for 3 months',
						'Unlimited messaging correspondence',
					]}
				/>
				<Card
					title="Monthly Subscription"
					price="$400/mo"
					discount="$300/mo for students"
					descriptionList={[
						'4 consulting sessions per month',
						'Unlimited messaging correspondence',
					]}
				/>
			</div>
		</>
	);
}
