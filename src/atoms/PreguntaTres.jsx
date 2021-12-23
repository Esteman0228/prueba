import React,{useState, useEffect, useContext} from 'react'
import cuestionarioContext from "../context/CuestionarioContext";
import Preguntas from '../preguntas.json';


export default function PreguntaTres() {
    //array destructure para sacar los objetos de categorias
    const {dificil, facil, muy_dificil, muy_facil, normal} = Preguntas

    const [seleccion, guardarSeleccion] = useState(null)
    const [mostrar, setMostrar] = useState({})
    const [bandera, setBandera] = useState(false)

    const contextCuestionario = useContext(cuestionarioContext);
    const{score, respuestaCorrectaTres, respuestaIncorrecta, controlScore} = contextCuestionario;

    useEffect(()=>{
        //funcion para elegir una pregunta al azar
        const valor = Math.floor(Math.random()*normal.length)
        setMostrar(normal[valor])
        setBandera(true)
    }, [])

    //Cuando el usuario envía su respuesta
    const onSubmit = (e) =>{
        e.preventDefault()
        if(seleccion){
            controlScore(score+100)
            respuestaCorrectaTres()
        }else{
            respuestaIncorrecta()
            controlScore(0)
        }
    }

    return (
        <div>
            <h2>3. {mostrar.pregunta}</h2>
            {bandera ? (
                <form id='formTres' onSubmit={onSubmit}>
                    {mostrar.opciones.map(item=>(
                    <div onChange={()=>guardarSeleccion(item.flag)} key={item.id}>
                        <input type="radio" name='seleccion' id={item.opcion} value={item.flag} />
                        <label htmlFor={item.opcion}>{item.opcion}</label>
                    </div>
                    ))}
                    <input type='submit' value='Avanzar' form='formTres'/>
                </form>  
            )
            : null}
        </div>
    )
}
