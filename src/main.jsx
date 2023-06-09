import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import { router } from './routes/Routes.jsx';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<div className=''>
				<AuthProvider>
					<RouterProvider router={router}></RouterProvider>
				</AuthProvider>
			</div>
		</QueryClientProvider>
	</React.StrictMode>
);
