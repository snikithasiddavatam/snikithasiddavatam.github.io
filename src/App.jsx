import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import OpenSource from "./components/OpenSource"
import Research from "./components/Research"
import Honors from "./components/Honors"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-ink text-strong min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Research />
      <Honors />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
