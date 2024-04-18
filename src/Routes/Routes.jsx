import {
    createBrowserRouter,
    
} from "react-router-dom";
import Root from "../Root";
import Error from "../Error/Error";
import Home from "../Home/Home";

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
              path: "/",
              element: <Home/> ,
            },
            {
              path: "/",
              element: <Home/> ,
            },
          ],

    },
]);




export default Routes;