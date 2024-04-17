
function CardTrilha({dadosTrilha} ){


    return(

        <>

            <h1> {dadosTrilha.nomeTrilha} </h1>
            <span> {dadosTrilha.cidade} / {dadosTrilha.estado}</span>
            <img width="200px" src={dadosTrilha.urlImagem} alt="imagem trilha" /> 
        
        {/* Recebendo minha props do App */}
        </>

    )

}

export default CardTrilha