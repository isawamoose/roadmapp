import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Services } from './components/Services/Services';
import { Pricing } from './components/Pricing/Pricing';
import { Header } from './components/Header/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="services" element={<Services />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="/" element={<Navigate to="services" replace />} />
				<Route path="*" element={<Navigate to="services" replace />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
