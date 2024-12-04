
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";


function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Projects />
     <Contact />
        
    </div>
  );
}

export default App;
