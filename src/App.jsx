import './App.css'
import Footer from './component/Footer'
import Contact from './component/Contact'
import Testimonials from './component/Testimonials'
import Experience from './component/Experience'
import Home from './component/Home'
import Navbar from './component/navbar'
import Overview from './component/Overview'
import Proficiency from './component/Proficiency'
import Projects from './component/ProjectCard'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Overview />
      <Experience />
      <Proficiency />
      <Projects/> 
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
