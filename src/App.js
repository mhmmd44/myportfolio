import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
    </div>
  );
}

export default App;
