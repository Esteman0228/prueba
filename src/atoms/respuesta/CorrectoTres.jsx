import React,{useContext} from 'react'
import cuestionarioContext from "../../context/CuestionarioContext";

export default function Correctotres() {

    const contextCuestionario = useContext(cuestionarioContext);
    const{score, cuartaPregunta, botonRetiro} = contextCuestionario;

    return (
        <div className='correcto'>
            <h1>¡Correcto! Nivel tres superado</h1>
            <h2>Tu puntuación es: {score}</h2>
            <p>¿Deseas continuar?</p>
            <div className='botones'>
                <button onClick={()=> cuartaPregunta()}>¡CLARO!</button>
                <button onClick={()=> botonRetiro()}>No me atrevo</button>
            </div>
        </div>
    )
}
