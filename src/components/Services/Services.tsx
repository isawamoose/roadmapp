import { JourneyItem } from './JourneyItem';
import './Services.scss';

export function Services() {
	return (
		<>
			<div className="heading">
				<h1>
					Navigate <span>your development journey.</span>
				</h1>
			</div>
			<ul className="journey">
				<JourneyItem
					text="Idea"
					marker={true}
					details="Tell us what you want to build."
				/>
				<JourneyItem
					text="Architecture Design"
					details="Get a tailored architecture design for your app, plus steps outlining the way forward."
				/>
				<JourneyItem
					text="Technology Training"
					details="Receive training to rapidly gain proficiency in the tools needed to build your app."
				/>
				<JourneyItem
					text="Development Support"
					details="Get one-on-one consultations along your journey plus code reviews and feedback."
				/>
				<JourneyItem
					text="App"
					marker={true}
					details="Celebrate reaching your destination with us."
				/>
			</ul>
		</>
	);
}
