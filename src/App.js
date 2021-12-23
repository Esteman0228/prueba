import Custionario from "./components/Custionario";
import './app.css'
import CuestionarioState from "./context/CuestionarioState";


function App() {
  return (
    <CuestionarioState>
      <main className="main">
        <Custionario/>
      </main>
    </CuestionarioState>

  );
}

export default App;
