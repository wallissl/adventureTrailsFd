
import { createContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({children}) => {

    const [users] = useFetch("/card.json")
    const [trilhas, setTrilhas] = useState([])

   /*  const [users] = useFetch("/card.json");/// */

    useEffect(() => {
        if(!!users){
            setTrilhas(users.trilhas)
        }
    },[users]);


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
        <TrilhasContext.Provider value={{trilhas, setTrilhas}}>
            {children}
        </TrilhasContext.Provider>
    );



}