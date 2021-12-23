import React,{useContext} from 'react'
import cuestionarioContext from "../../context/CuestionarioContext";

export default function CorrectoUno() {

    const contextCuestionario = useContext(cuestionarioContext);
    const{score, segundaPregunta, botonRetiro} = contextCuestionario;
    console.log(score)
    return (
        <div className='correcto'>
            <h1>¡Correcto! Nivel uno superado</h1>
            <h2>Tu puntuación es: {score}</h2>
            <p>¿Deseas continuar?</p>
            <div className='botones'>
                <button onClick={()=> segundaPregunta()}>¡CLARO!</button>
                <button onClick={()=> botonRetiro()}>No me atrevo</button>
            </div>
        </div>
    )
}
