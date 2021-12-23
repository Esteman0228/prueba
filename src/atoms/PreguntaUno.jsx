import React,{useState, useEffect, useContext} from 'react'
import cuestionarioContext from "../context/CuestionarioContext";
import Preguntas from '../preguntas.json';


export default function PreguntaUno() {
    //array destructure para sacar los objetos de categorias
    const {dificil, facil, muy_dificil, muy_facil, normal} = Preguntas

    const [seleccion, guardarSeleccion] = useState(null)
    const [mostrar, setMostrar] = useState({})
    const [bandera, setBandera] = useState(false)

    const contextCuestionario = useContext(cuestionarioContext);
    const{score, respuestaCorrectaUno, respuestaIncorrecta, controlScore} = contextCuestionario;

    useEffect(()=>{
        //funcion para elegir una pregunta al azar
        const valor = Math.floor(Math.random()*muy_facil.length)
        setMostrar(muy_facil[valor])
        setBandera(true)
    }, [])

    //Cuando el usuario envía su respuesta
    const onSubmit = (e) =>{
        e.preventDefault()
        if(seleccion){
            controlScore(100)
            respuestaCorrectaUno()
        }else{
            respuestaIncorrecta()
            controlScore(0)
        }
    }

    return (
        <div>
            <h2>1. {mostrar.pregunta}</h2>
            {bandera ? (
                <form id='formUno' onSubmit={onSubmit}>
                    {mostrar.opciones.map(item=>(
                    <div onChange={()=>guardarSeleccion(item.flag)} key={item.id}>
                        <input type="radio" name='seleccion' id={item.id} value={item.flag} />
                        <label htmlFor={item.id}>{item.opcion}</label>
                    </div>
                    ))}
                    <input type='submit' value='Avanzar' form='formUno'/>
                </form>  
            )
            : null}
        </div>
    )
}
