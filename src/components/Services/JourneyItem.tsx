import { useState } from 'react';
import './JourneyItem.scss';

interface JourneyItemProps {
	text: string;
	details?: string;
	marker?: boolean;
}

export function JourneyItem(props: JourneyItemProps) {
	const [expanded, setExpanded] = useState(false);
	return (
		<li
			className={`journey-item ${
				props.marker ? 'marker' : 'dashed-side'
			}`}
			onClick={() => {
				if (!props.marker) setExpanded(!expanded);
			}}>
			{props.marker && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					fill="#ec3a7e"
					viewBox="0 0 16 16">
					<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
				</svg>
			)}
			<div className="text-container">
				<h3>{props.text}</h3>
				{expanded && (
					<div className="hidden-text">
						<p>{props.details}</p>
					</div>
				)}
			</div>
		</li>
	);
}
