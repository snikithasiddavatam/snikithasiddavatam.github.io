import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Particles from "./components/Particles"

function App() {

  return (
    <Particles className="bg-slate-950" color="#ffffff" quantity={100}>
      <div className="min-h-screen text-white overflow-auto">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Particles>
  )
}

export default App
