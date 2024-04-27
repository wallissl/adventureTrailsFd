import { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";

function HookUseEffect() {

    const [users] = useFetch("/card.json");


    return(
        <>
        
        <h1>Teste</h1>
        {users && users.map((use) => (
            <div key={use.name}>
                <p>{use.nomeTrilha}</p>
                <p>{use.cidade}</p>
                <p>{use.estado}</p>
                <p>{use.duracao}</p>
                <p>{use.trajeto}</p>
                <p>{use.dificuldade}</p>
                <p>{use.tipo}</p>
                <p>{use.nomeUsuario}</p>
                <img width="200px" src={use.urlImagem}></img>
            </div>
        ))}
        
        
        
        </>
    )

    
}

export default HookUseEffect;