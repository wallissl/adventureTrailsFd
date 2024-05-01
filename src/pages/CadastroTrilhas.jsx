import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TrilhasContext } from "../context/TrilhasContext";
import { useNavigate } from "react-router-dom";


// Passo 1 - Importar o hook useForm e em sequência desestruturar o retorno para utilizar a função register
// Passo 2 - Registrar os campos incluindo a validação
// Passo 3 - Criar a função de submissão
// Passo 4 - Capturar a função jandleSubmit do retorno do hook useForm
// Passo 5 - Passar o valor da prop onSubmit do form como a handleSubmit e como parâmetro da handleSubmit a função personalizada de envio do formulário (nesse caso sendForm)

function CadastroTrilhas(){
    const { register, handleSubmit, formState: {errors} } = useForm();
    // uso do contexto
    const {addTrail} = useContext(TrilhasContext);
    const navigate = useNavigate()

    // V | 01:48:00 | Submissão do formulário
    function sendForm (formValue) {
        console.log(formValue)

        addTrail({...formValue,
            duracao: Number(formValue.duracao),
            trajeto: Number(formValue.trajeto),
        });

        /* navigate("/trilhas"); */
    }
    return(
        <>
        
        <h1> Cadastro de Trilhas </h1>
       
       <form onSubmit={handleSubmit(sendForm)} >
            <div>
                <label htmlFor="nomeTrilha">Nome da trilha</label>
                <input type="text" {...register("nomeTrilha", {
                    required: "Este campo é obrigatório",
                    maxLength: {value: 100, message: "Este campo aceita no máximo 100 caracteres"
                }
                } )} />
                {errors?.nomeTrilha && <p>{errors.nomeTrilha?.message}</p>}
            </div>

            <div>
                <label htmlFor="duracao">Duração estimada em minutos</label>
                <input type="number" {...register("duracao", {
                    required: "Este campo é obrigatório"
                })} />
                {errors?.duracao && <p>{errors.duracao?.message}</p>}
            </div>

            <div>
                <label htmlFor="trajeto">Trajeto</label>
                <input type="number" {...register("trajeto", {
                    required: "Este campo é obrigatório"
                })} />
                {errors?.trajeto && <p>{errors.trajeto?.message}</p>}
            </div>

            <div>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" {...register("cidade", {
                     required: "Este campo é obrigatório",
                     maxLength: {value: 60, message: "Este campo aceita no máximo 60 caracteres"}
                })} />
            </div>

            <div>
                <label htmlFor="estado">Estado</label>
                <input type="text" {...register("estado", {
                    required: "Este campo é obrigatório",
                    maxLength: {
                        value: 2,
                    message: "Este campo aceita no máximo 2 caracteres"}
                })} />
            </div>

            <div>
                <label htmlFor="nomeUsuario">Nome completo do usuário</label>
                <input type="text" {...register("nomeUsuario", {
                     required: "Este campo é obrigatório",
                     maxLength: {
                        value: 60,
                         message: "Este campo aceita no máximo 60 caracteres"
                        }
                      })}
                       />
            </div>

            <div>
            <label htmlFor="dificuldade">Dificudade</label>
                <select {...register("dificuldade", {
                required: "Este campo é obrigatório"})}>
                    <option value="Iniciante">Selecione a dificuldade da trilha</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Difícil">Difícil</option>
                </select>
            </div>

            <div>
            <label htmlFor="tipo">Tipo de trilha</label>
                <select {...register("tipo", {
                required: "Este campo é obrigatório"})}>
                    <option value="">Selecione o tipo da trilha</option>
                    <option value="caminhada / trekking">Caminhada/Trekking</option>
                    <option value="ciclismo">Ciclismo</option>
                    
                </select>
            </div>

            <div>
                <label htmlFor="urlImagem">URL imagem da trilha</label>
                <input type="text" {...register("urlImagem", {
                     required: "Este campo é obrigatório",
                     maxLength: {
                        value: 300,
                         message: "Campo de imagem"
                        }
                      })} />


            </div>

            <button type="submit">Cadastrar</button>      
            <button onClick={() => navigate ("/")}>Voltar</button>      

       </form>
        
        </>
    )
}

export default CadastroTrilhas