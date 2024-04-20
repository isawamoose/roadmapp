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
				<JourneyItem text="Idea" marker={true} />
				<JourneyItem
					text="Architecture Design"
					details="Get a map of your app's structure, from front end to back end."
				/>
				<JourneyItem
					text="Technology Training"
					details="Learn the tools needed for building your app, such as React and AWS"
				/>
				<JourneyItem
					text="Development Support"
					details="Talk to our experts as you move forward with your app."
				/>
				<JourneyItem text="App" marker={true} />
			</ul>
		</>
	);
}
