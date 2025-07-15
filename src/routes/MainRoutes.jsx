import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MyMatches from "../pages/MyMatches";
import Results from "../pages/Results";
import Profile from "../pages/Profile";
import MainLayout from "../layout/MainLayout";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import BrMatches from "../pages/BrMatches"

const MainRoutes = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
        path: "/",
        element: <Home/>
         },
         {
            path: "/results",
            element: <Results />
         },
         {
            path: "/profile",
            element: <Profile />
         },
        
         {
            path: "/my-matches",
            element: <MyMatches />
         },

         {
            path: "/signup",
            element: <SignUp />
         },

         {
            path: "/login",
            element: <Login />
         },
         {
            path: "/brmatches",
            element: <BrMatches/>
         },
        
         
    ]

    }]);
export default MainRoutes;