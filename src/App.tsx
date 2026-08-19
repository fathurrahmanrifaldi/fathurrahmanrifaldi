import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/layout/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import DataInAction from "./components/sections/DataInAction";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import TechPlayground from "./components/sections/TechPlayground";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DataInAction />
        <Experience />
        <TechPlayground />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
