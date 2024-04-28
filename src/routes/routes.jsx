import { createBrowserRouter } from "react-router-dom";

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