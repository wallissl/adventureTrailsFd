
import { createContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch.jsx";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({children}) => {

    const [dados, isLoading] = useFetch("/card.json");
    const [trilhas, setTrilhas] = useState([]);

   /*  const [users] = useFetch("/card.json");/// */

    useEffect(() => {
         if(!!dados && !isLoading){
            setTrilhas(dados.trilhasJson)
        } 
    },[dados]);
   
    // V | Contexto formulário | 01:55:00
    function addTrail(trailData){
        setTrilhas((t) => [...t, trailData])
    }


    /* const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false); */

    /* useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((res) => res.json())
        .then((value) => {
            setData(value);
        })
        .catch((err) => {
            window.alert("Ocorreu um erro ao buscar os dados");
            console.error(err);
        })

        .finally(() => setTimeout(()=> setLoading(false), 1000))
    }, [url])
 */

    return(
        <TrilhasContext.Provider value={{trilhas, setTrilhas, isLoading,addTrail}}>
            {children}
        </TrilhasContext.Provider>
    );
}