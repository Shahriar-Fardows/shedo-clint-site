import {
    createBrowserRouter,
    
} from "react-router-dom";
import Root from "../Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../Log/Login/Login";

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
              path: "/login",
              element: <Login/> ,
            },
          ],

    },
]);




export default Routes;