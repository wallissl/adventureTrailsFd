import HookUseEffect from "../components/CardTrilha/HookUseEffect"
import CardTrilha from "../components/CardTrilha/index.jsx"
import { useContext } from "react"
import { TrilhasContext } from "../context/TrilhasContext"



function Trilhas(){

    const {trilhas, isLoading} = useContext(TrilhasContext)
    
    return(
        <>

        <div>
                <h1>Explorar Trilhas</h1>

            {Array.isArray(trilhas) && !isLoading ? (
            <div>
                {trilhas.map((trilha, index) => (
                <CardTrilha dadosTrilha={trilha} key={index} />
                ))} 
            </div>
            ) : ( 
                <span> Não há dados disponíveis </span>
            )}

        </div>
         </>
        )}

        /* {!!trilhas && trilhas.map((trilha, index) => (
            <HookUseEffect dadosTrilha={trilha} key={index} />
        ))}
       </div> */

export default Trilhas