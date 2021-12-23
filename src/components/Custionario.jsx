import React,{useContext} from "react"
import cuestionarioContext from "../context/CuestionarioContext";
import PreguntaUno from "../atoms/PreguntaUno";
import PreguntaDos from "../atoms/PreguntaDos";
import PreguntaTres from "../atoms/PreguntaTres";
import PreguntaCuatro from "../atoms/PreguntaCuatro";
import PreguntaCinco from "../atoms/PreguntaCinco";
import CorrectoUno from "../atoms/respuesta/CorrectoUno";
import CorrectoDos from "../atoms/respuesta/CorrectoDos";
import CorrectoTres from "../atoms/respuesta/CorrectoTres";
import CorrectoCuatro from "../atoms/respuesta/CorrectoCuatro";
import CorrectoCinco from "../atoms/respuesta/CorrectoCinco";
import Incorrecto from "../atoms/respuesta/Incorrecto";
import Retiro from "../atoms/respuesta/Retiro";



export default function Custionario() {


//traer producto del state
const contextCuestionario = useContext(cuestionarioContext);
const{primero, segundo, tercero, cuarto, quinto, correctoUno, correctoDos, correctoTres, correctoCuatro, correctoCinco, incorrecto, retiro} = contextCuestionario;

return (
      <div className="Cuestionario">
         {correctoUno ? <CorrectoUno/> : null}
         {correctoDos ? <CorrectoDos/> : null}
         {correctoTres ? <CorrectoTres/> : null}
         {correctoCuatro ? <CorrectoCuatro/> : null}
         {correctoCinco ? <CorrectoCinco/> : null}

         {retiro ? <Retiro/>: null}

         {incorrecto ? <Incorrecto/> : null}

         {primero ? <PreguntaUno/> : null}
         
         {segundo ? <PreguntaDos/> : null}
         
         {tercero ? <PreguntaTres/> : null}

         {cuarto ? <PreguntaCuatro/> : null}

         {quinto ? <PreguntaCinco/> : null}
      </div>
   );
}
