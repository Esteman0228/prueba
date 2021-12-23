import React,{useState, useEffect, useContext} from 'react'
import cuestionarioContext from "../context/CuestionarioContext";
import Preguntas from '../preguntas.json';


export default function PreguntaCuatro() {
    //array destructure para sacar los objetos de categorias
    const {dificil, facil, muy_dificil, muy_facil, normal} = Preguntas

    const [seleccion, guardarSeleccion] = useState(null)
    const [mostrar, setMostrar] = useState({})
    const [bandera, setBandera] = useState(false)

    const contextCuestionario = useContext(cuestionarioContext);
    const{quintaPregunta} = contextCuestionario;

    useEffect(()=>{
        //funcion para elegir una pregunta al azar
        const valor = Math.floor(Math.random()*dificil.length)
        setMostrar(dificil[valor])
        setBandera(true)
    }, [])

    //Cuando el usuario envía su respuesta
    const onSubmit = (e) =>{
        e.preventDefault()
        if(seleccion){
            console.log('respuesta correcta')
            quintaPregunta()
        }else{console.log('Incorrecto')}
    }

    return (
        <div>
            <h2>4. {mostrar.pregunta}</h2>
            {bandera ? (
                <form id='formCuatro' onSubmit={onSubmit}>
                    {mostrar.opciones.map(item=>(
                    <div onChange={()=>guardarSeleccion(item.flag)} key={item.id}>
                        <input type="radio" name='seleccion' id={item.opcion} value={item.flag} />
                        <label htmlFor={item.opcion}>{item.opcion}</label>
                    </div>
                    ))}
                    <input type='submit' value='Avanzar' form='formCuatro'/>
                </form>  
            )
            : null}
        </div>
    )
}
