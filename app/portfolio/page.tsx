import Portfolio from "../../src/enteties/Portfolio/Portfolio"

const App: React.FC = () => {
    return (
      <div className="App">
        {/* Используем компонент About */}
        <Portfolio />
      </div>
    );
  };
  
  export default App;