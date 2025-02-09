import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import './App.css'


function App() {
  return (
    <div className="flex flex-col  bg-zinc-900 bg-fixed bg-cover bg-center select-none font-mplus">
      <Header /> 
      <About />
      <Skills />
      <Footer />
    </div>
  )
}

export default App