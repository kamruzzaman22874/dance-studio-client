import { createBrowserRouter } from 'react-router-dom';
import AddClass from '../DashboardCommon/InstructorCompo/AddClass/AddClass';
import ManageUsers from '../DashboardCommon/InstructorCompo/AddClass/AdminDashboard/ManageUsers';
import ManageClasses from '../DashboardCommon/InstructorCompo/AddClass/ManageClasses';
import Dashboard from '../layout/Dashboard';
import Main from '../layout/Main';
import ClassesPage from '../pages/ClassesPage/ClassesPage';
import Login from '../pages/Login/Login';
import Home from '../pages/shared/Home/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import InstructorNav from '../pages/InstructorNav/InstructorNav';
import UserNavbar from '../pages/UserNavbar/UserNavbar';
import MyClasses from '../pages/MyClasses/MyClasses';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import MySelectClassa from '../components/MySelectClassa/MySelectClassa';
import InstructorPage from '../components/InstructorPage/InstructorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/myclasses",
        element: <ClassesPage />,
      },
      {
        path: "/instructor",
		element: <InstructorPage/>
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/instructor-addclass",
        element: <AddClass />,
      },
      {
        path: "/dashboard/manageclasses",
        element: <ManageClasses />,
      },

      {
        path: "/dashboard/manageusers",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/myclass",
        element: <MyClasses />,
      },
    //   {
    //     path: "/instructor",
    //     element: <InstructorPage/>
    //   },

      {
        path: "users",
        element: <UserNavbar />,
      },
    ],
  },
]);
