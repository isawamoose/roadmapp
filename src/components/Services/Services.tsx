import './Services.scss';

export function Services() {
	return (
		<>
			<div className="heading">
				<h1>
					Navigate <span>app development.</span>
				</h1>
			</div>
			<div className="map-item marker">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					fill="#ec3a7e"
					viewBox="0 0 16 16">
					<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
				</svg>
				<h3>Idea</h3>
			</div>
			<div className="map-item map-line">
				<h3>Architecture Design</h3>
			</div>
			<div className="map-item map-line">
				<h3>Technology Training</h3>
			</div>
			<div className="map-item map-line">
				<h3>Development Support</h3>
			</div>
			<div className="map-item marker">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					fill="#ec3a7e"
					viewBox="0 0 16 16">
					<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
				</svg>
				<h3>App</h3>
			</div>
		</>
	);
}
