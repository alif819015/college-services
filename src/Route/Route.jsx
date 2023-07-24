import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home";
import College from "../Components/Page/College/College";
import Admission from "../Components/Page/Admission/Admission";
import MyCollege from "../Components/Page/MyCollege/MyCollege";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Page/Error/Error";
import CollegeForm from "../Components/Page/Form/CollegeForm";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/colleges",
            element: <PrivateRoute><College></College></PrivateRoute>
        },
        {
            path: "/admission",
            element: <Admission></Admission>
        },
        {
            path: "/myCollege",
            element: <MyCollege></MyCollege>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/form",
            element: <CollegeForm></CollegeForm>
        },
        {
            path: "/error",
            element: <Error></Error>
        },

      ]
    },
  ]);

export default router;