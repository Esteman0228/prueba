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


const cuestionarioReducer= (state, action) =>{
    switch(action.type){
        case PRIMERA_PREGUNTA:
            return{
                ...state,
                primero:true,
                segundo:false,
                tercero:false,
                cuarto:false,
                quinto:false,
                correcto:false,
                incorrecto:false
            }
            case SEGUNDA_PREGUNTA:
            return{
                ...state,
                correctoUno:false,
                segundo:true,
            }
            case TERCERA_PREGUNTA:
            return{
                ...state,
                correctoDos:false,
                tercero:true,
            }
            case CUARTA_PREGUNTA:
            return{
                ...state,
                correctoTres:false,
                cuarto:true,
            }
            case QUINTA_PREGUNTA:
            return{
                ...state,
                correctoCuatro:false,
                quinto:true
            }
            case RESPUESTA_CORRECTAUNO:
                return{
                ...state,
                primero:false,
                    correctoUno:true
                }
            case RESPUESTA_CORRECTADOS:
                return{
                ...state,
                segundo:false,
                    correctoDos:true
                }
            case RESPUESTA_CORRECTATRES:
            return{
                ...state,
                tercero:false,
                correctoTres:true
            }
            case RESPUESTA_CORRECTACUATRO:
                return{
                ...state,
                cuarto:false,
                correctoCuatro:true
                }
            case RESPUESTA_CORRECTACINCO:
                return{
                ...state,
                quinto:false,
                correctoCinco:true
                }
            case RESPUESTA_INCORRECTA:
                return{
                ...state,
                    primero:false,
                    segundo:false,
                    tercero:false,
                    cuarto:false,
                    quinto:false,
                    correcto:false,
                    correctoUno: false,
                    correctoDos: false,
                    correctoTres: false,
                    correctoCuatro: false,
                    correctoCinco: false,
                    incorrecto:true
                }
            case CONTROL_SCORE:
                return{
                    ...state,
                    score: action.payload
                }
            case BOTON_RETIRO:
                return{
                    ...state,
                    primero:false,
                    segundo:false,
                    tercero:false,
                    cuarto:false,
                    quinto:false,
                    correcto:false,
                    correctoUno: false,
                    correctoDos: false,
                    correctoTres: false,
                    correctoCuatro: false,
                    correctoCinco: false,
                    incorrecto:false,
                    retiro:true
                }

        default:
            return state;
    }
}

export default cuestionarioReducer;