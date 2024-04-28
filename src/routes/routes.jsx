import { createBrowserRouter } from "react-router-dom";
import {Button} from "@mui/material"

const routers = createBrowserRouter([

    {

        path: "/",
        element: <App />,
        errorElement: <div>Not Found</div>,
        children:[
            {
                path:"/",
            },{
                path:"",
            },{
            path:"/",
            }
        ]

    }
])

export default routers