import javascript from "../assets/img/js.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import tailwind from "../assets/img/tailwind.png";
import typescript from "../assets/img/typescript.png";
import react from "../assets/img/react.png";
import sass from "../assets/img/sass.png";
import php from "../assets/img/php.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import selenium from "../assets/img/selenium.png";
import drawio from "../assets/img/draw.io.png";
import git from "../assets/img/git.png";
import mysql from "../assets/img/mysql.png";
import netbeans from "../assets/img/netbeans.png";
import { motion } from "framer-motion";
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const skillItemsDev = [
  {
    skillIcon: javascript,
    skillName: "Javascript",
  },
  {
    skillIcon: html,
    skillName: "HTML5",
  },
  {
    skillIcon: css,
    skillName: "CSS3",
  },
  {
    skillIcon: tailwind,
    skillName: "Tailwind",
  },
  {
    skillIcon: typescript,
    skillName: "Typescript",
  },
  {
    skillIcon: react,
    skillName: "React",
  },
  {
    skillIcon: sass,
    skillName: "Sass",
  },
  {
    skillIcon: php,
    skillName: "PHP",
  },
  {
    skillIcon: java,
    skillName: "Java",
  },
  {
    skillIcon: python,
    skillName: "Python",
  },
];

const skillItemsDevOps = [
  {
    skillIcon: selenium,
    skillName: "Selenium",
  },
  {
    skillIcon: drawio,
    skillName: "Draw.io",
  },
  {
    skillIcon: git,
    skillName: "Git",
  },
  {
    skillIcon: mysql,
    skillName: "MySQL",
  },
  {
    skillIcon: netbeans,
    skillName: "NetBeans",
  },
];

function Skills() {

  const[text]=useTypewriter({
    words:['Dev /'],
    loop:1000
})

  return (
    <section className="flex flex-col items-center justify-center gap-30 text-zinc-100 tracking-[12px] text-2xl mt-80 w-full">
      <h1 className="flex">EXPERIÊNCIA</h1>

      <motion.div 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 2, x: 0, transition: { duration: 1.0 } }}

      >
        <div id="skills" className="lg:flex lg:gap-30 lg:justify-start lg:items-start">
          <div className="flex flex-col items-center justify-center gap-9">
            <h1 className="text-xl tracking-[8px] text-zinc-300">{'<'}{text}{'>'}</h1>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
              {skillItemsDev.map((item, i) => {
                return (
                  <div
                    className="flex flex-col items-center gap-3 font-medium"
                    key={i}
                  >
                    <img className="lg:h-17 h-15 grayscale-25" src={item.skillIcon} />
                    <p className="text-[13px] font-medium tracking-normal text-zinc-300">
                      {item.skillName}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-9 mt-10 lg:mt-0">
            <h1 className="text-xl tracking-[8px] text-zinc-300">
              {"<DevOps />"}
              <Cursor />
            </h1>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
              {skillItemsDevOps.map((item, i) => {
                return (
                  <div
                    className="flex flex-col items-center gap-3 font-medium"
                    key={i}
                  >
                    <img className="lg:h-17 h-15 grayscale-25" src={item.skillIcon} />
                    <p className="text-[13px] font-medium tracking-normal text-zinc-300">
                      {item.skillName}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}

export default Skills;
