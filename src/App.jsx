import CardTrilha from "./components/CardTrilha"
import './App.css'
import HookUseEffect from "./components/CardTrilha/HookUseEffect"

function App(){

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade:"iniciante",
      tipo:"caminhada / trekking",
      nomeUsuario:"Guilherme André",
      urlImagem:"https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade:"iniciante",
      tipo:"caminhada / trekking",
      nomeUsuario:"Guilherme André",
      urlImagem:"https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    } // É possível duplicar essa lista para trazer diversos cards.. Semana 01
  ]

  return(

    <>
      <div className="container">
        <h1 className="titulo">Explore trilhas incríveis</h1>
        {/* {
          listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} /> ))
        }  - Chamando o componenete local */ }

        <HookUseEffect />

      </div>
      
      {/* dadosTrilha é uma props */}

      
    
    </>

  )

}

export default App