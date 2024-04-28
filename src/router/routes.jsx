import { createBrowserRouter } from "react-router-dom";
import {Button} from "@mui/material"

// importação de páginas
import Home from "../pages/Home.jsx";
import Trilhas from "../pages/Trilhas.jsx";
import CadastroTrilhas from "../pages/CadastroTrilhas.jsx";
import App from "../App.jsx"


const routers = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        errorElement: <div>Not Found</div>,
        children:[
            {
                path:"/",
                element: <Home />,
            },{
                path:"/Trilhas",
                element: <Trilhas />,
            },{
            path:"/CadastroTrilhas",
            element: <CadastroTrilhas />,
            }
        ]

    }
])

export default routers