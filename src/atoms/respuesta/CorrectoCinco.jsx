import React,{useContext} from 'react'
import cuestionarioContext from "../../context/CuestionarioContext";

export default function CorrectoCinco() {

    const contextCuestionario = useContext(cuestionarioContext);
    const{score} = contextCuestionario;

    return (
        <div className='correcto'>
            <h1>¡Correcto! Haz superado el desafío</h1>
            <h2>Tu puntuación es: {score}</h2>
            <h2>te llevas {score} mil pesos</h2>
        </div>
    )
}
