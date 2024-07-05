import "../src/App.css";
import BasicScatterPlot from "./shared/components/BasicScatterPlot";

const App = () => {
  return (
    <div>
      <h1 className="title">Trabalho Engenharia de Dados</h1>
      <div className="sidebar"></div>
      <h3 className="student-info">Alunos: Rogério e Tércio</h3>
      <div>
        <div>
          <BasicScatterPlot></BasicScatterPlot>
        </div>
      </div>
    </div>
  );
};

export default App;
