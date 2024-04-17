import * as PropTypes from "prop-types";
import "./style.css"

function CardTrilha({dadosTrilha} ){

    return(

        <>
            <div className="card-container">
            <img className="card_imagem" width="200px" src={dadosTrilha.urlImagem} alt="imagem trilha" /> 
                <h1> {dadosTrilha.nomeTrilha} </h1>
                <span> {dadosTrilha.cidade} / {dadosTrilha.estado}</span>
            </div>
        
        {/* Recebendo minha props do App */}
        </>

    )

}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        nomeUsuario:PropTypes.string.isRequired,
        urlImagem: PropTypes.string.isRequired
        
    })
}

export default CardTrilha