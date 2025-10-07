import photo from "../assets/img/foto.png";
import githubLogo from "../assets/img/github.png";
import linkedinLogo from "../assets/img/linkedin.png";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { motion } from "framer-motion";

function About() {

    const[text]=useTypewriter({
        words:['Desenvolvedor Back-end'],
        loop:1000
    })

  return (
    <section className="lg:flex justify-center items-center lg:mt-[15%] tracking-[3px] gap-5 scale-70 lg:scale-80">
      <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{once: true}}
          className="flex justify-center"
      >
        <img className="h-70 lg:h-80" src={photo} />
        </motion.div>
      <div className="lg:w-[575px] flex flex-col gap-5 ">
        <div className="text-zinc-100">

          <h1 className="text-3xl lg:text-left lg:text-4xl mb-2 mt-2">Artur Villanova Vargas</h1>
          <h2 className="text-2xl bg-black h-18 lg:h-auto">
            <span>{'<'}</span>
            <span className="text-[#D08700]"> type</span>
            <span className="text-[#3767CE]">=</span>
            <span>{'{'}</span>
            <span className="text-[#289C2C]">{text}</span>
            <span><Cursor />{'}'}</span>
            <span>{'/ >'}</span>
            
          </h2>
          <p className="text-2xl">
            em busca de ser full-stack. Graduando Análise e Desenvolvimento de
            Sistemas, Aficionado por UX/UI e <span className="font-pixel">Games</span>.
          </p>
        </div>
        <div className="flex items-center gap-7">
            <a className="scale-130" target="_blank" href="https://github.com/arturvrgs"><img className="transition hover:scale-105 hover:animate-pulse hover:cursor-pointer" src={githubLogo} alt="" /></a>
            <a className="scale-130" target="_blank" href="https://www.linkedin.com/in/artur-vargas-37b426250/"><img className="transition hover:scale-105 hover:animate-pulse hover:cursor-pointer" src={linkedinLogo} alt="" /></a>
            <div className="bg-[#D08700] w-full h-1 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
