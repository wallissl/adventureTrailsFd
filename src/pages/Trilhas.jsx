import HookUseEffect from "../components/CardTrilha/HookUseEffect"
import { useContext } from "react"
import { TrilhasContext } from "../context/TrilhasContext"


function Trilhas(){

    const {trilhas} = useContext(TrilhasContext)
    
    return(
        <>

        <HookUseEffect /> 

       <div>
            <h1>Explorar Trilhas</h1>
            {Array.isArray(trilhas) && 
            trilhas.map((trilha, index) => (
                <HookUseEffect dadosTrilha={trilha} key={index} />
            ))}
       </div>
        
        </>
    )
}

export default Trilhas