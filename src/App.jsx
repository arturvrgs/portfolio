import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import './App.css'


function App() {
  return (
    <div className="flex flex-col bg-zinc-900 bg-[url('./assets/img/bg.png')] bg-fixed bg-cover bg-center select-none font-mplus">
      <Header /> 
      <About />
      <Skills />
    </div>
  )
}

export default App