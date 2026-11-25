import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Research from "./components/Research"
import Projects from "./components/Projects"
import OpenSource from "./components/OpenSource"
import Honors from "./components/Honors"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:grid lg:grid-cols-[17rem_1fr] lg:gap-20">
      <Navbar />
      <main>
      <Hero />
      <Education />
      <Research />
      <Experience />
      <Projects />
      <OpenSource />
      <Honors />
      <Contact />
      <Footer />
      </main>
    </div>
  )
}

export default App
