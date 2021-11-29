import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Selling from "./components/selling";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Selling />
    </div>
  );
}

export default App;
