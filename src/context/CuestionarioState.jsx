import React,{useReducer} from 'react'
import cuestionarioContext from './CuestionarioContext'
import cuestionarioReducer from './CuestionarioReducer'
import {
    PRIMERA_PREGUNTA,
    SEGUNDA_PREGUNTA,
    TERCERA_PREGUNTA,
    CUARTA_PREGUNTA,
    QUINTA_PREGUNTA,
} from '../types'

const CuestionarioState = props =>{
    const initialState ={
        score:0,
        primero: true,
        segundo: false,
        tercero: false,
        cuarto: false,
        quinto: false
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
                //funciones
                primeraPregunta,
                segundaPregunta,
                terceraPregunta,
                cuartaPregunta,
                quintaPregunta
            }}
        >
            {props.children}
        </cuestionarioContext.Provider>
    )
}



export default CuestionarioState;