import React,{useState, useEffect} from 'react'
import Preguntas from '../preguntas.json';


export default function PreguntaCinco() {
    //array destructure para sacar los objetos de categorias
    const {dificil, facil, muy_dificil, muy_facil, normal} = Preguntas

    const [seleccion, guardarSeleccion] = useState(null)
    const [mostrar, setMostrar] = useState({})
    const [bandera, setBandera] = useState(false)


    useEffect(()=>{
        //funcion para elegir una pregunta al azar
        const valor = Math.floor(Math.random()*muy_dificil.length)
        setMostrar(muy_dificil[valor])
        setBandera(true)
    }, [])

    //Cuando el usuario envía su respuesta
    const onSubmit = (e) =>{
        e.preventDefault()
        if(seleccion){
            console.log('respuesta correcta')
        }else{console.log('Incorrecto')}
    }

    return (
        <div>
            <h2>5. {mostrar.pregunta}</h2>
            {bandera ? (
                <form id='formCinco' onSubmit={onSubmit}>
                    {mostrar.opciones.map(item=>(
                    <div onChange={()=>guardarSeleccion(item.flag)} key={item.id}>
                        <input type="radio" name='seleccion' id={item.opcion} value={item.flag} />
                        <label htmlFor={item.opcion}>{item.opcion}</label>
                    </div>
                    ))}
                    <input type='submit' value='Avanzar' form='formCinco'/>
                </form>  
            )
            : null}
        </div>
    )
}
