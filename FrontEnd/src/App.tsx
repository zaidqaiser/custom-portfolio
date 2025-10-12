import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HeroPage } from "./components/HeroPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import "./index.css";

function App() {
  return (
    <div className="bg-[var(--black-olive)] min-h-screen w-full flex justify-center text-white">
      <div className="w-[90%] container">
        <Header />
        <HeroPage />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
