import {
    createBrowserRouter,
    
} from "react-router-dom";
import Root from "../Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import SignUp from "../Log/SignUp/SignUp";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/> ,
        errorElement: <Error/>,
        children: [
            {
              path: "/",
              element: <Home/> ,
            },
            {
              path: "/signUp",
              element: <SignUp/> ,
            },
          ],

    },
]);




export default Routes;