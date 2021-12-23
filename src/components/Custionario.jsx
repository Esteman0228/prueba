import React,{useContext} from "react"
import cuestionarioContext from "../context/CuestionarioContext";
import PreguntaUno from "../atoms/PreguntaUno";
import PreguntaDos from "../atoms/PreguntaDos";
import PreguntaTres from "../atoms/PreguntaTres";
import PreguntaCuatro from "../atoms/PreguntaCuatro";
import PreguntaCinco from "../atoms/PreguntaCinco";

export default function Custionario() {


//traer producto del state
const contextCuestionario = useContext(cuestionarioContext);
const{primero, segundo, tercero, cuarto, quinto} = contextCuestionario;

return (
      <div className="Cuestionario">
         {primero ? <PreguntaUno/> : null}
         
         {segundo ? <PreguntaDos/> : null}
         
         {tercero ? <PreguntaTres/> : null}

         {cuarto ? <PreguntaCuatro/> : null}

         {quinto ? <PreguntaCinco/> : null}
      </div>
   );
}
