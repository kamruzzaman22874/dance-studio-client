import { createBrowserRouter } from 'react-router-dom';
import AddClass from '../DashboardCommon/InstructorCompo/AddClass/AddClass';
import ManageUsers from '../DashboardCommon/InstructorCompo/AddClass/AdminDashboard/ManageUsers';
import ManageClasses from '../DashboardCommon/InstructorCompo/AddClass/ManageClasses';
import Dashboard from '../layout/Dashboard';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';
import Home from '../pages/shared/Home/Home/Home';
import SignUp from '../pages/SignUp/SignUp';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},

			{
				path: '/signup',
				element: <SignUp />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
	{
		path: 'dashboard',
		element: <Dashboard />,
		children: [
			{
				path: '/dashboard/instructor-addclass',
				element: <AddClass />,
			},
			{
				path: '/dashboard/manageclasses',
				element: <ManageClasses />,
			},
			{
				path: '/dashboard/manageusers',
				element: <ManageUsers />,
			},
			

		],
	},
]);
