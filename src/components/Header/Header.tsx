import { NavLink } from 'react-router-dom';
import './Header.scss';

export function Header() {
	return (
		<>
			<header>
				<NavLink to="/services">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 300 150"
						shapeRendering="geometricPrecision"
						textRendering="geometricPrecision">
						<g>
							<text
								fontFamily="inter,sans-serif"
								fontSize="48"
								fontWeight="700"
								transform="translate(20 93)"
								fill="#424874">
								<tspan>ROADM</tspan>
							</text>
							<text
								fontFamily="inter,sans-serif"
								fontSize="48"
								fontWeight="700"
								transform="translate(202 93)"
								fill="#ec3a7e">
								<tspan>APP</tspan>
							</text>
						</g>
					</svg>
				</NavLink>
				<p className="tagline">App Development Consulting</p>

				<nav>
					<ul>
						<li>
							<NavLink to="/services">
								<h2>Services</h2>
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact">
								<h2>Contact</h2>
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
