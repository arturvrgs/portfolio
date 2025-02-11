import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import './App.css'


function App() {
  return (
    <div className="flex flex-col  bg-zinc-900 bg-fixed bg-cover bg-center select-none font-mplus">
      <Header /> 
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App