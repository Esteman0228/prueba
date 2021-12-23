import React,{useReducer} from 'react'
import cuestionarioContext from './CuestionarioContext'
import cuestionarioReducer from './CuestionarioReducer'
import {
    PRIMERA_PREGUNTA,
    SEGUNDA_PREGUNTA,
    TERCERA_PREGUNTA,
    CUARTA_PREGUNTA,
    QUINTA_PREGUNTA,
    RESPUESTA_CORRECTAUNO,
    RESPUESTA_CORRECTADOS,
    RESPUESTA_CORRECTATRES,
    RESPUESTA_CORRECTACUATRO,
    RESPUESTA_CORRECTACINCO,
    RESPUESTA_INCORRECTA,
    CONTROL_SCORE,
    BOTON_RETIRO
} from '../types'

const CuestionarioState = props =>{
    const initialState ={
        score:0,
        primero: true,
        segundo: false,
        tercero: false,
        cuarto: false,
        quinto: false,
        correctoUno: false,
        correctoDos: false,
        correctoTres: false,
        correctoCuatro: false,
        correctoCinco: false,
        incorrecto:false,
        retiro:false
    }

    //dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(cuestionarioReducer, initialState)
    //Mostrar primera pregunta
    const primeraPregunta = () =>{
        dispatch({
            type:PRIMERA_PREGUNTA
        })
    }
    //Mostrar segunda pregunta
    const segundaPregunta = () =>{
        dispatch({
            type:SEGUNDA_PREGUNTA
        })
    }
    //Mostrar tercera pregunta
    const terceraPregunta = () =>{
        dispatch({
            type:TERCERA_PREGUNTA
        })
    }
    //Mostrar cuarta pregunta
    const cuartaPregunta = () =>{
        dispatch({
            type:CUARTA_PREGUNTA
        })
    }
    //Mostrar quinta pregunta
    const quintaPregunta = () =>{
        dispatch({
            type:QUINTA_PREGUNTA
        })
    }

    //Cuando la respuesta uno es correcta
    const respuestaCorrectaUno = () => {
        dispatch({
            type:RESPUESTA_CORRECTAUNO
        })
    }

    //Cuando la respuesta DOS es correcta
    const respuestaCorrectaDos = () => {
        dispatch({
            type:RESPUESTA_CORRECTADOS
        })
    }

    //Cuando la respuesta TRES es correcta
    const respuestaCorrectaTres = () => {
        dispatch({
            type:RESPUESTA_CORRECTATRES
        })
    }

    //Cuando la respuesta CUATRO es correcta
    const respuestaCorrectaCuatro = () => {
        dispatch({
            type:RESPUESTA_CORRECTACUATRO
        })
    }

    //Cuando la respuesta CINCO es correcta
    const respuestaCorrectaCinco = () => {
        dispatch({
            type:RESPUESTA_CORRECTACINCO
        })
    }

    //control de score
    const controlScore = puntaje => {
        dispatch({
            type: CONTROL_SCORE,
            payload:puntaje
        })
    }


    //Cuando la respuesta es incorrecta
    const respuestaIncorrecta = () => {
        dispatch({
            type:RESPUESTA_INCORRECTA
        })
    }

    //Botón retiro
    const botonRetiro = () => {
        dispatch({
            type: BOTON_RETIRO
        })
    }



    return(
        <cuestionarioContext.Provider
            value={{
                //States
                score:state.score,
                primero: state.primero,
                segundo: state.segundo,
                tercero: state.tercero,
                cuarto: state.cuarto,
                quinto: state.quinto,
                correctoUno: state.correctoUno,
                correctoDos: state.correctoDos,
                correctoTres: state.correctoTres,
                correctoCuatro: state.correctoCuatro,
                correctoCinco: state.correctoCinco,
                incorrecto: state.incorrecto,
                retiro: state.retiro,
                //funciones
                primeraPregunta,
                segundaPregunta,
                terceraPregunta,
                cuartaPregunta,
                quintaPregunta,
                respuestaCorrectaUno,
                respuestaIncorrecta,
                respuestaCorrectaDos,
                respuestaCorrectaTres,
                respuestaCorrectaCuatro,
                respuestaCorrectaCinco,
                controlScore,
                botonRetiro
            }}
        >
            {props.children}
        </cuestionarioContext.Provider>
    )
}



export default CuestionarioState;