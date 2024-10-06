import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])



export default Routes;