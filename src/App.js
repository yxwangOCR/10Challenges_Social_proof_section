import "../src/sass/App.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Rating from "./components/Rating";

function App() {
  return (
    <div className='App'>
      <header>
        <Hero />
        <Rating />
      </header>
      <Main />
    </div>
  );
}

export default App;
