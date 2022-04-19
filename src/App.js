import './style/App.css';
import Header from "./components/Header";
import QuizComp from "./components/QuizComp";
import Bottom from "./components/Bottom";

function App() {
  return (
    <div className="App">
        <Header/>
        <QuizComp/>
        <Bottom/>
    </div>
  );
}

export default App;
