
import './App.css';
import Routes from './routes/Routes';
import ContextProvider from "./context/index"

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </div>
  );
}

export default App;
