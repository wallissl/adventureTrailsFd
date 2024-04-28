import "./index.css"
import {Link} from "react-router-dom"

function Header(){


    return(

        <>
        
        <header>

            <div className="logo">
               <Link to="/"> <h3>Adventure Trails FD</h3> </Link>
            </div>

            <div className="menu">
                <ul>
                   <Link to='/Trilhas'><li>Explorar Trilhas</li></Link> 
                   <Link to="/CadastroTrilhas"><li>Cadastrar Trilhas</li></Link>
                </ul>
            </div>


        </header>
        
        </>

    )

}

export default Header