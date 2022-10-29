import "./App.css";
import VistaPrincipal from "./componentes/vista-principal";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
      <div className="App">
        <VistaPrincipal/>
        <Routes>
            <Route path="/con"></Route>
        </Routes>
      </div>
  );
}

export default App;
