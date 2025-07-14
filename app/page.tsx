import Navbar from "../app/components/Navbar";
import About from "../app/components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <About />
      </section>
      <section id="work" className="py-24">
        <Experience />
      </section>
      <section id="tech" className="py-24">
        <TechStack />
      </section>
      <section id="projects" className="py-24">
        <Projects />
      </section>
      <section id="contact" className="py-24">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
