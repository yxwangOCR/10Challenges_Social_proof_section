import "./App.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Rating from "./components/Rating";

function App() {
  return (
    <div className='App'>
      <div>
        <Hero />
        <Rating />
      </div>
      <Main />
    </div>
  );
}

export default App;
