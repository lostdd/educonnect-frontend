import Courses from "../../src/enteties/Courses/Courses"

const App: React.FC = () => {
    return (
      <div className="App">
        {/* Используем компонент About */}
        <Courses />
      </div>
    );
  };
  
  export default App;