import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Services } from './Services/Services';
import { Contact } from './Contact/Contact';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="services" element={<Services />} />
				<Route path="contact" element={<Contact />} />
				<Route path="/" element={<Navigate to="services" replace />} />
				<Route path="*" element={<Navigate to="services" replace />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
