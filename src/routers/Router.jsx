import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import JobDetails from "../pages/home/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/home/JobApply";
import MyApplication from "../pages/home/MyApplication";
import AddJob from "../pages/home/AddJob";
import MyPostedJobs from "../pages/home/MyPostedJobs";
import ViewApplications from "../pages/home/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Data is Not Found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addJob',
        element: <PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute>
      },
      {
        path: '/myApplication',
        element: <PrivateRoute>
          <MyApplication></MyApplication>
        </PrivateRoute>
      },
      {
        path: '/myPostedJobs',
        element: <PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>
      },
      {
        path: '/viewApplications/:job_id',
        element: <PrivateRoute>
          <ViewApplications></ViewApplications>
        </PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute>
          <JobDetails></JobDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
    ]
  },
]);

export default router;