import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import { router } from './routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className=''>
			<AuthProvider>
				<RouterProvider router={router}></RouterProvider>
				<App/>
			</AuthProvider>
		</div>
	</React.StrictMode>
);
