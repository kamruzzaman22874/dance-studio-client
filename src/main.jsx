
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import { router } from './routes/Routes.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<div className=''>
					<RouterProvider router={router}></RouterProvider>
				</div>
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
);
