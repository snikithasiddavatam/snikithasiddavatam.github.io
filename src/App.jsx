import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Particles from "./components/Particles"

function App() {

  return (
    <>
      <Particles className="bg-slate-950" color="#ffffff" quantity={100} />
      <div className="relative z-10 text-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
