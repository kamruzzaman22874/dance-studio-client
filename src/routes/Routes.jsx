import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/shared/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";

 export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		 children: [
			{
				 path: '/',
				element:<Home/>
			},
			
			{
				path: '/signup',
				element: <SignUp/>
			},
			{
				path: '/login',
				element: <Login/>
			}
		]
	},
]);