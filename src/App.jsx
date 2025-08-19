import './App.css';
import Header from './component/Header';
import About from './component/About';
import Experience from './component/Experience';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Projects from './component/Projects';


function App() {
  return (
    <div className="main-container">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer>
        &copy; {new Date().getFullYear()} Al Amin Bin Shafiq - Spring Boot Developer
      </footer>
    </div>
  );
}

export default App;
