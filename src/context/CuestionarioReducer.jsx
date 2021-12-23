import {
    PRIMERA_PREGUNTA,
    SEGUNDA_PREGUNTA,
    TERCERA_PREGUNTA,
    CUARTA_PREGUNTA,
    QUINTA_PREGUNTA,
} from '../types'


const cuestionarioReducer= (state, action) =>{
    switch(action.type){
        case PRIMERA_PREGUNTA:
            return{
                primero:true,
                segundo:false,
                tercero:false,
                cuarto:false,
                quinto:false,
            }
            case SEGUNDA_PREGUNTA:
            return{
                primero:false,
                segundo:true,
                tercero:false,
                cuarto:false,
                quinto:false,
            }
            case TERCERA_PREGUNTA:
            return{
                primero:false,
                segundo:false,
                tercero:true,
                cuarto:false,
                quinto:false,
            }
            case CUARTA_PREGUNTA:
            return{
                primero:false,
                segundo:false,
                tercero:false,
                cuarto:true,
                quinto:false,
            }
            case QUINTA_PREGUNTA:
            return{
                primero:false,
                segundo:false,
                tercero:false,
                cuarto:false,
                quinto:true,
            }

        default:
            return state;
    }
}

export default cuestionarioReducer;