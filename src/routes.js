import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User/User';
import NotFound from './pages/Page404';
import EditUser from './pages/User/AddUser';
import AddCourse from './pages/Courses/AddCourse';
import AllCourses from './pages/Courses/AllCourses';
import EditCourse from './pages/Courses/EditCourse';
import HomeSettings from './pages/Settings/HomeSettings';
import Security from './pages/Settings/Security';
import General from './pages/Settings/General';
import EditPlayList from './pages/Courses/EditPlaylist';
// ----------------------------------------------------------------------






export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <DashboardApp /> },
        { path: 'users', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ]
    },
    {
      path: '/dashboard/user',
      element: <DashboardLayout />,
      children: [
        { path: 'allusers', element: <User/> },
        { path: 'edituser', element: <EditUser /> }
      ]
    },
    {
      path: '/dashboard/course',
      element: <DashboardLayout />,
      children: [
        { path: 'addnewcourse', element: <AddCourse /> },
        { path: 'editcourse/:courseName', element: <EditCourse /> },
        { path: 'editplaylist', element: <EditPlayList /> },
        { path: 'allcourses', element: <AllCourses /> }
      ]
    },
    {
      path: '/dashboard/settings',
      element: <DashboardLayout />,
      children: [
        { path: 'home', element: <HomeSettings/> },
        { path: 'security', element: <Security/> },
        { path: 'general', element: <General/> },
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        // { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
