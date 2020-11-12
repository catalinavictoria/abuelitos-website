import './App.css';
import Homepage from './components/homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
        <p>
          Párrafo para texto de Sitio Web Abuelitos!
        </p>
        <div clasName="botones">
          <button className="button1">Botón que no hace nada</button>
          <button className="button2">Otro botón que no hace nada</button>
        </div>
      </header>
    </div>
  );
}

export default App;
