import React,{useContext} from 'react'
import cuestionarioContext from "../../context/CuestionarioContext";

export default function CorrectoCuatro() {

    const contextCuestionario = useContext(cuestionarioContext);
    const{score, quintaPregunta, botonRetiro} = contextCuestionario;

    return (
        <div className='correcto'>
            <h1>¡Correcto! Nivel cuatro superado</h1>
            <h2>Tu puntuación es: {score}</h2>
            <p>¿Deseas continuar?</p>
            <div className='botones'>
                <button onClick={()=> quintaPregunta()}>¡CLARO!</button>
                <button onClick={()=> botonRetiro()}>No me atrevo</button>
            </div>
        </div>
    )
}
