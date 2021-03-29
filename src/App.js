import './App.css';
import Routes from './app/routes/Routes';
import ContextProvider from "./app/context/index"

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
