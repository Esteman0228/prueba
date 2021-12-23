import React,{useContext} from 'react'
import cuestionarioContext from "../../context/CuestionarioContext";

export default function CorrectoDos() {

    const contextCuestionario = useContext(cuestionarioContext);
    const{score, terceraPregunta, botonRetiro} = contextCuestionario;

    return (
        <div className='correcto'>
            <h1>¡Correcto! Nivel dos superado</h1>
            <h2>Tu puntuación es: {score}</h2>
            <p>¿Deseas continuar?</p>
            <div className='botones'>
                <button onClick={()=> terceraPregunta()}>¡CLARO!</button>
                <button onClick={()=> botonRetiro()}>No me atrevo</button>
            </div>
        </div>
    )
}
