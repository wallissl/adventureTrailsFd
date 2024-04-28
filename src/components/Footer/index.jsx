import "./index.css"
import {Link} from "react-router-dom"

function Footer(){


    return(

        <>
        
        <footer>

            <div className="logoF">
               <Link to="/"> <h4>Adventure Trails FD</h4> </Link>
            </div>

            <div className="icones">
                {/* <ul>
                   <li></li>
                   <li></li>
                </ul> */}
            </div>


        </footer>
        
        </>

    )

}

export default Footer