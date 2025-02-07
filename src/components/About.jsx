import photo from "../assets/img/foto.png";
import githubLogo from "../assets/img/github.png";
import linkedinLogo from "../assets/img/linkedin.png";
import {useTypewriter, Cursor} from 'react-simple-typewriter'


function About() {

    const[text]=useTypewriter({
        words:['Desenvolvedor Front-end'],
        loop:1000
    })

  return (
    <section className="flex w-full justify-center tracking-[3px] gap-5 mt-65 scale-80">
      <img className="w-auto max-h-[329px]" src={photo} />
      <div className="w-[575px]">
        <div className="text-zinc-100">

          <h1 className="text-4xl mb-2 mt-2">Artur Villanova Vargas</h1>
          <h2 className="text-2xl bg-black">
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
        <div className="flex items-center gap-7 mt-18">
            <a className="scale-130" target="_blank" href="https://github.com/arturvrgs"><img className="transition hover:scale-105 hover:animate-pulse hover:cursor-pointer" src={githubLogo} alt="" /></a>
            <a className="scale-130" target="_blank" href="https://www.linkedin.com/in/artur-vargas-37b426250/"><img className="transition hover:scale-105 hover:animate-pulse hover:cursor-pointer" src={linkedinLogo} alt="" /></a>
            <div className="bg-[#D08700] w-full h-1 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
